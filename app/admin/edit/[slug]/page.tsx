import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/app/actions/articles'
import { ArticleForm } from '@/components/ArticleForm'

export default async function EditArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Edit Article: {article.title}</h1>
        <ArticleForm article={article} isEdit={true} />
      </div>
    </div>
  )
}

