/**
 * Схема базы данных D1 для премиального кондитерского интернет-магазина.
 * Все таблицы описаны через Drizzle ORM (sqlite-core) и совместимы с Edge Runtime.
 */

import { relations, sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/**
 * ТАБЛИЦА НАСТРОЕК: Динамический контент сайта.
 */
export const siteSettings = sqliteTable('site_settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});

/**
 * КОНТЕНТ СТРАНИЦ: Хранение текстов и SEO для каждого маршрута.
 */
export const pageContent = sqliteTable('page_content', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  pageRoute: text('page_route').notNull(),
  key: text('key').notNull(),
  value: text('value').notNull(),
}, (table) => ({
  pageRouteIdx: index('page_content_page_route_idx').on(table.pageRoute),
}));


/** * Выводимые типы 
 */
export type SiteSetting = typeof siteSettings.$inferSelect;
export type PageContent = typeof pageContent.$inferSelect;
export type Category = typeof categories.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type OrderItem = typeof orderItems.$inferSelect;
