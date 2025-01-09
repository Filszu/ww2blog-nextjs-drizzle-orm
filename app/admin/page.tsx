import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArticleList } from '@/components/ArticleList'
import { getArticles } from '../actions/articles'
import { LoadingArticles } from '@/components/LoadingArticles'
import { LogoutButton } from './components/LogoutButton'

export default async function AdminPanel() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <Button asChild>
                <Link href="/admin/new">Add New Article</Link>
              </Button>
              <Link href="/">
                <Button variant="outline">Back to Site</Button>
              </Link>
              <LogoutButton />
            </div>
            <Suspense fallback={<LoadingArticles />}>
              <ArticleList articles={articles} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

