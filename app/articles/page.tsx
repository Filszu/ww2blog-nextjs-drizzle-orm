import { Suspense } from 'react'
import { Metadata } from 'next'
import { ArticlesContent } from '@/components/articles-content'
import { LoadingArticlesGrid } from '@/components/loading-articles-grid'
import { getArticles } from '../actions/articles'
import { generateMetadata } from '../utils/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Articles',
  description: 'Explore our collection of articles about World War II military machines, including tanks, planes, and ships.',
  keywords: ['articles', 'military history'],
})

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center font-playfair">WW2 Machine Articles</h1>
        <Suspense fallback={<LoadingArticlesGrid />}>
          <ArticlesContent articles={articles} />
        </Suspense>
      </div>
    </div>
  )
}

