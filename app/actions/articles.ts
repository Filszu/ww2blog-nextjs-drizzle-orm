'use server'

import { db } from '@/db'
import { articles } from '@/db/schema'
import { eq } from 'drizzle-orm'
import type { NewArticle } from '@/db/schema'
import { v4 as uuidv4 } from 'uuid'

export async function getArticles() {
  try {
    return await db.select().from(articles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw new Error('Failed to fetch articles. Please try again later.')
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const results = await db.select()
      .from(articles)
      .where(eq(articles.slug, slug))
    if (results.length === 0) {
      throw new Error('Article not found')
    }
    return results[0]
  } catch (error) {
    console.error('Error fetching article:', error)
    throw new Error('Failed to fetch the article. Please try again later.')
  }
}

export async function createArticle(article: NewArticle) {
  try {
    const result = await db.insert(articles).values({
      ...article,
      uuid: uuidv4(), // Explicitly generate a UUID
      created_at: new Date(),
      modified_at: new Date(),
      created_by: article.created_by || 'admin',
      modified_by: article.modified_by || 'admin'
    }).returning()
    return result[0]
  } catch (error) {
    console.error('Error creating article:', error)
    throw new Error('Failed to create the article. Please check your input and try again.')
  }
}

export async function updateArticle(uuid: string, article: Partial<NewArticle>) {
  try {
    const result = await db.update(articles)
      .set({
        ...article,
        modified_at: new Date()
      })
      .where(eq(articles.uuid, uuid))
      .returning()
    if (result.length === 0) {
      throw new Error('Article not found')
    }
    return result[0]
  } catch (error) {
    console.error('Error updating article:', error)
    throw new Error('Failed to update the article. Please check your input and try again.')
  }
}

export async function deleteArticle(uuid: string) {
  try {
    const result = await db.delete(articles)
      .where(eq(articles.uuid, uuid))
      .returning()
    if (result.length === 0) {
      throw new Error('Article not found')
    }
    return result[0]
  } catch (error) {
    console.error('Error deleting article:', error)
    throw new Error('Failed to delete the article. Please try again later.')
  }
}

