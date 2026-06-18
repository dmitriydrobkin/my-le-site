import { drizzle } from 'drizzle-orm/d1';
import { getRequestContext } from '@cloudflare/next-on-pages';
import * as schema from './schema';

// "Умная" обертка для базы данных. 
// Она решает главную проблему Cloudflare: база подключается только в момент действия пользователя.
export const db = new Proxy({} as any, {
  get(target, prop) {
    let d1Binding;
    
    try {
      // Пытаемся получить базу данных из контекста Cloudflare
      const { env } = getRequestContext();
      d1Binding = (env as any).DB;
    } catch (e) {
      // Игнорируем ошибку, если контекста еще нет
    }

    if (!d1Binding) {
      throw new Error("База данных D1 не найдена! Убедитесь, что переменная DB привязана в Cloudflare (Settings -> Functions).");
    }
    
    // Инициализируем Drizzle только в момент реального запроса (select, insert и т.д.)
    const dbInstance = drizzle(d1Binding, { schema });
    const value = (dbInstance as any)[prop];
    
    // Возвращаем функцию или свойство базы данных
    return typeof value === 'function' ? value.bind(dbInstance) : value;
  }
});
