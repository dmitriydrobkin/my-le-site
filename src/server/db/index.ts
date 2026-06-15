import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/server/db/schema';
import { getOptionalRequestContext } from '@cloudflare/next-on-pages';

export const db = new Proxy({} as any, {
  get(_, prop) {
    let env;
    try {
      const ctx = getOptionalRequestContext();
      env = ctx?.env;
    } catch (e) {
      env = null;
    }

    if (!env || !env.DB) {
      // БРОСАЕМ ОШИБКУ, а не молчим. Это покажет реальную причину в консоли Cloudflare
      throw new Error(`CRITICAL: Database binding 'DB' is missing! env exists: ${!!env}`);
    }

    const client = drizzle(env.DB, { schema });
    const value = (client as any)[prop];
    
    return typeof value === 'function' ? value.bind(client) : value;
  },
});
