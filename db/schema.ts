import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const articles = pgTable('articles', {
  uuid: uuid('uuid').primaryKey().defaultRandom(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  modified_at: timestamp('modified_at').notNull().defaultNow(),
  created_by: text('created_by').notNull(),
  modified_by: text('modified_by').notNull(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  intro: text('intro'),
  category: text('category'),
  select_a_category: text('select_a_category'),
  image_url: text('image_url'),
  specifications: text('specifications'),
  development_and_production: text('development_and_production'),
  combat_performance: text('combat_performance'),
  legacy: text('legacy')
})

export type Article = typeof articles.$inferSelect
export type NewArticle = typeof articles.$inferInsert

