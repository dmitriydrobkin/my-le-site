'use server';

import { verifyAdminSession } from './auth';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import { categories } from '../db/schema';
import { eq, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getCategoriesAction() {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  return await db.select().from(categories).orderBy(categories.sortOrder, desc(categories.createdAt));
}

export async function getCategoryAction(id: string) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  const result = await db.select().from(categories).where(eq(categories.id, id));
  return result[0];
}

export async function saveCategoryAction(formData: FormData) {
  await verifyAdminSession();
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  const id = (formData.get('id') as string) || crypto.randomUUID();
  const slug = formData.get('slug') as string;
  const nameRu = formData.get('nameRu') as string;
  const nameUk = formData.get('nameUk') as string;
  const sortOrder = parseInt(formData.get('sortOrder') as string) || 0;

  await db.insert(categories).values({
    id,
    slug,
    nameRu,
    nameUk,
    sortOrder,
    createdAt: Date.now(),
  }).onConflictDoUpdate({
    target: categories.id,
    set: {
      slug,
      nameRu,
      nameUk,
      sortOrder,
    }
  });

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}

export async function deleteCategoryAction(id: string) {
  await verifyAdminSession();
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  await db.delete(categories).where(eq(categories.id, id));

  revalidatePath('/');
  revalidatePath('/admin');
  return { success: true };
}
