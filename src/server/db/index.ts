import { drizzle } from 'drizzle-orm/d1';
import { getRequestContext } from '@cloudflare/next-on-pages';
import * as schema from './schema';

export const db = new Proxy({} as any, {
  get(target, prop) {
    let d1Binding: any = undefined;

    // 1. Пытаемся получить базу данных из контекста Cloudflare Edge
    try {
      const ctx = getRequestContext();
      if (ctx && ctx.env && ctx.env.DB) {
        d1Binding = ctx.env.DB;
      }
    } catch (e) {
      // Контекст недоступен (например, во время статической сборки проекта)
    }

    // 2. Если базы нет в контексте (при сборке), возвращаем умный авто-резолвящийся мок, чтобы Next.js не зависал
    if (!d1Binding) {
      const createMock = (): any => {
        const promise = Promise.resolve([]);
        return Object.assign(() => createMock(), promise, {
          select: () => createMock(),
          from: () => createMock(),
          where: () => createMock(),
          orderBy: () => createMock(),
          limit: () => createMock(),
          offset: () => createMock(),
          insert: () => createMock(),
          values: () => createMock(),
          update: () => createMock(),
          set: () => createMock(),
          delete: () => createMock(),
          returning: () => createMock(),
        });
      };
      return createMock();
    }

    // 3. Если мы на сервере и база доступна — инициализируем реальный Drizzle
    const dbInstance = drizzle(d1Binding, { schema });
    const value = (dbInstance as any)[prop];
    
    return typeof value === 'function' ? value.bind(dbInstance) : value;
  }
});