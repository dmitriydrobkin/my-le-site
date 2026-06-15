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

// Лиды (заявки)
export const leads = sqliteTable('leads', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  contactInfo: text('contact_info').notNull(),
  status: text('status', { enum: ['new', 'contacted', 'converted', 'rejected'] }).notNull().default('new'),
  estimatedBudget: text('estimated_budget'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Ответы из квиза
export const quizAnswers = sqliteTable('quiz_answers', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  leadId: text('lead_id').notNull().references(() => leads.id, { onDelete: 'cascade' }),
  answersJson: text('answers_json', { mode: 'json' }).notNull(), // Храним ответы в JSON
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});