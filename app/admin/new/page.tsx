import { ArticleForm } from '@/components/ArticleForm'

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Create New Article</h1>
        <ArticleForm />
      </div>
    </div>
  )
}

