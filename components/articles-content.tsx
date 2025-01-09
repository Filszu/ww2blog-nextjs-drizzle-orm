"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Article } from "@/db/schema";

const categories = ["all", "tanks", "planes", "ships"];

export function ArticlesContent({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <>
      <Tabs value={filter} className="w-full mb-8">
        <TabsList className="w-full justify-center">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize"
              asChild
            >
              <Link href={`/articles?filter=${category}`}>{category}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Card key={article.uuid} className="overflow-hidden">
            <Image
              src={article.image_url || "/placeholder.svg"}
              alt={article.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{article.intro}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/articles/${article.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
