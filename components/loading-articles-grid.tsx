import { LoadingArticle } from "./loading-article"
import { Skeleton } from "./ui/skeleton"

export function LoadingArticlesGrid() {
  return (
    <div className="space-y-4">
      <div className="w-full flex justify-center mb-8">
        <Skeleton className="h-10 w-[400px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingArticle key={i} />
        ))}
      </div>
    </div>
  )
}

