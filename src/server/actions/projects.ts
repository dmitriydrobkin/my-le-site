'use server';

import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { projects } from '../db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { uploadToR2 } from '../functions/r2';

export async function saveProjectAction(formData: FormData) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  const id = (formData.get('id') as string) || crypto.randomUUID();
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const projectLink = formData.get('projectLink') as string;
  const tags = formData.get('tags') as string;

  const imageFile = formData.get('imageFile') as File | null;
  let imageUrl: string | undefined = undefined;

  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadToR2(imageFile);
  }

  // UPSERT logc
  await db.insert(projects).values({
    id,
    title,
    description,
    projectLink,
    tags,
    imageUrl: imageUrl || '', // Will be updated conditionally below
    isHidden: 0,
    sortOrder: 0,
    createdAt: Date.now(),
  }).onConflictDoUpdate({
    target: projects.id,
    set: {
      title,
      description,
      projectLink,
      tags,
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
