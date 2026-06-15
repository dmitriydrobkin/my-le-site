import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Глобальные настройки сайта
export const settings = sqliteTable('settings', {
  key: text('key').primaryKey(),
  value: text('value'),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Контент страниц
export const pageContent = sqliteTable('page_content', {
  route: text('route').primaryKey(),
  h1: text('h1'),
  seoTitle: text('seo_title'),
  description: text('description'),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});