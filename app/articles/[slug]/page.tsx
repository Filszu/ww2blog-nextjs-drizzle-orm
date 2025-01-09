import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/app/actions/articles'
import { ArticleContent } from '@/components/article-content'
import { LoadingArticle } from '@/components/loading-article'
import { generateMetadata as createMetadata } from '@/app/utils/metadata'

interface Props {
  params: { slug: string }
}
export const revalidate = 10
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  
  if (!article) {
    return createMetadata({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    })
  }

  return createMetadata({
    title: article.title,
    description: article.intro || `Learn about ${article.title} - a World War II military machine.`,
    keywords: [article.category || 'unknown', 'military history'],
    ogImage: article.image_url || undefined,
  })
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)
  
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

