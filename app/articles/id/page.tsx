import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getArticleById } from '@/app/actions/articles'
import { ArticleContent } from './components/article-content'
import { LoadingArticle } from '@/app/components/loading-article'

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleById(parseInt(params.id))
  
  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <Suspense fallback={<LoadingArticle />}>
          <ArticleContent article={article} />
        </Suspense>
      </div>
    </div>
  )
}

