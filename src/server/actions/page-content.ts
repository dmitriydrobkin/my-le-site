'use server';

import { drizzle } from 'drizzle-orm/d1';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { pageContent } from '@/server/db/schema';
import { uploadImageToR2 } from '@/server/functions/r2';
import { revalidatePath } from 'next/cache';

export async function savePageContent(formData: FormData) {
  try {
    const route = formData.get('route') as string;
    const h1 = formData.get('h1') as string;
    const heroSubtitle = formData.get('heroSubtitle') as string;
    const seoTitle = formData.get('seoTitle') as string;
    const description = formData.get('description') as string;

    const { env } = getRequestContext();
    const db = drizzle((env as any).DB);

    let heroImage: string | undefined = undefined;
    const file = formData.get('heroImageFile') as File | null;
    if (file && file.size > 0) {
      heroImage = await uploadImageToR2(file);
    }

    const dataToSave: any = {
      route,
      h1,
      heroSubtitle,
      seoTitle,
      description,
      updatedAt: new Date(),
    };

    if (heroImage) {
      dataToSave.heroImage = heroImage;
    }

    await db
      .insert(pageContent)
      .values(dataToSave)
      .onConflictDoUpdate({
        target: [pageContent.route],
        set: dataToSave,
      });

    revalidatePath(route);
    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.error('Ошибка при сохранении контента страницы:', error);
    return { success: false, error: 'Не удалось сохранить данные' };
  }
}