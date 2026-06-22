'use server';

import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '../db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { uploadToR2 } from '../functions/r2';

function slugify(text: string) {
  const ru: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    ' ': '-', '_': '-', ',': '-', '.': '-', '/': '-'
  };
  let result = text.toLowerCase().split('').map(char => ru[char] || char).join('');
  return result.replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export async function saveProjectAction(formData: FormData) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  const id = (formData.get('id') as string) || crypto.randomUUID();
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || slugify(title) || id.slice(0, 8);
  const category = (formData.get('category') as string) || 'САЙТЫ';
  const description = formData.get('description') as string;
  const projectLink = formData.get('projectLink') as string;
  const tags = formData.get('tags') as string;
  const clientName = formData.get('clientName') as string;
  const timeline = formData.get('timeline') as string;
  const challenge = formData.get('challenge') as string;
  const solution = formData.get('solution') as string;
  const isTop = formData.get('isTop') === 'on' ? 1 : 0;

  const stackStr = formData.get('stack') as string;
  const stackArray = stackStr ? stackStr.split(',').map(s => s.trim()).filter(Boolean) : [];
  
  const resultsJsonString = formData.get('resultsJson') as string;
  let resultsArray = [];
  try {
    resultsArray = resultsJsonString ? JSON.parse(resultsJsonString) : [];
  } catch (e) {}

  const imageFile = formData.get('imageFile') as File | null;
  let imageUrl: string | undefined = undefined;

  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadToR2(imageFile);
  }

  // UPSERT logc
  await db.insert(projects).values({
    id,
    slug,
    title,
    category,
    description,
    projectLink,
    tags,
    clientName,
    timeline,
    challenge,
    solution,
    isTop,
    resultsJson: resultsArray,
    stackJson: stackArray,
    imageUrl: imageUrl || '', // Will be updated conditionally below
    isHidden: 0,
    sortOrder: 0,
    createdAt: Date.now(),
  }).onConflictDoUpdate({
    target: projects.id,
    set: {
      slug,
      title,
      category,
      description,
      projectLink,
      tags,
      clientName,
      timeline,
      challenge,
      solution,
      isTop,
      resultsJson: resultsArray,
      stackJson: stackArray,
      ...(imageUrl ? { imageUrl } : {}),
    }
  });

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}

export async function toggleProjectVisibilityAction(id: string, currentHidden: number) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  await db.update(projects)
    .set({ isHidden: currentHidden === 0 ? 1 : 0 })
    .where(eq(projects.id, id));

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}

export async function duplicateProjectAction(id: string) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  const projectToCopy = await db.select().from(projects).where(eq(projects.id, id)).get();
  
  if (projectToCopy) {
    const newId = crypto.randomUUID();
    await db.insert(projects).values({
      ...projectToCopy,
      id: newId,
      slug: `${projectToCopy.slug}-copy-${Math.random().toString(36).slice(2, 6)}`,
      title: `${projectToCopy.title} (Копия)`,
      isHidden: 1,
      createdAt: Date.now(),
    });
  }

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}

export async function deleteProjectAction(id: string) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  await db.delete(projects).where(eq(projects.id, id));

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}
