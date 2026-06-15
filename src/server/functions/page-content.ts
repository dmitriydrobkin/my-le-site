import { unstable_noStore as noStore } from 'next/cache';
import { db } from '@/server/db';
import { pageContent } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function getPageContent(route: string) {
  noStore();
  const { env } = getRequestContext();
  const database = db(env.DB);
  
  try {
    // Ищем запись по колонке 'route', которая соответствует текущему пути
    const result = await database.select()
      .from(pageContent)
      .where(eq(pageContent.route, route))
      .get(); // .get() вернет одну запись или undefined
      
    // Возвращаем результат или пустой объект, если ничего не найдено
    return result || {};
  } catch (error) {
    console.error('Ошибка чтения pageContent:', error);
    return {};
  }
}
