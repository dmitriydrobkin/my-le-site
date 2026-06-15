import { db } from '@/server/db';
import { siteSettings } from '@/server/db/schema';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

// Используем $inferSelect для автоматического определения типа записи
export type SiteSetting = typeof siteSettings.$inferSelect;

/**
 * Безопасно загружает динамические настройки сайта из базы D1.
 */
export async function getSiteSettings(): Promise<Record<string, string>> {
  const { env } = getRequestContext();
  const database = db(env.DB);
  
  try {
    const results = await database.select().from(siteSettings).all();
    
    // Преобразуем массив настроек в удобный объект { [key]: value }
    const settingsMap: Record<string, string> = {};
    for (const row of results) {
      if (row.key) {
        settingsMap[row.key] = row.value || '';
      }
    }
    
    return settingsMap;
  } catch (error) {
    console.error('Ошибка при получении настроек:', error);
    return {};
  }
}
