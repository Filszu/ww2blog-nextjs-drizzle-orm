"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Suspense } from "react";
// import { ArticlesContent } from "./articles-content";
// import { LoadingArticlesGrid } from "./loading-articles-grid";
import { Article } from "@/db/schema";

// const articles = [
//   {
//     title: "The Mighty Sherman Tank",
//     description:
//       "Explore the history and impact of the M4 Sherman, the most widely used medium tank by the Western Allies in World War II.",
//     image: "/placeholder.svg",
//     category: "tanks",
//   },
//   {
//     title: "Spitfire: Guardian of British Skies",
//     description:
//       "Discover the legendary Supermarine Spitfire, the British single-seat fighter aircraft used by the Royal Air Force during and after World War II.",
//     image: "/placeholder.svg",
//     category: "planes",
//   },
//   {
//     title: "U-boats: Germany's Underwater Threat",
//     description:
//       "Delve into the world of German U-boats, the naval submarines that played a crucial role in the Battle of the Atlantic during World War II.",
//     image: "/placeholder.svg",
//     category: "ships",
//   },
//   {
//     title: "The Iconic T-34 Tank",
//     description:
//       "Learn about the Soviet T-34 tank, widely considered one of the most effective and influential tank designs of World War II.",
//     image: "/placeholder.svg",
//     category: "tanks",
//   },
//   {
//     title: "B-17 Flying Fortress",
//     description:
//       "Explore the history of the B-17 Flying Fortress, a four-engine heavy bomber developed for the United States Army Air Corps.",
//     image: "/placeholder.svg",
//     category: "planes",
//   },
//   {
//     title: "Battleship Yamato: Japan's Naval Giant",
//     description:
//       "Discover the story of the Yamato, the lead ship of the Yamato class of battleships built for the Imperial Japanese Navy shortly before World War II.",
//     image: "/placeholder.svg",
//     category: "ships",
//   },
// ];

const categories = ["all", "tanks", "planes", "ships"];

export function Articles({ articles }: { articles: Article[] }) {

 
  return (
    <section id="articles" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={article.image_url || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-gray-800">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.intro}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 overflow-hidden"
            style={{ maxHeight: "300px" }}
          >
            {articles.slice(3).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={article.image_url || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-gray-800">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{article.intro || ""}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/articles/${article.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* <Suspense fallback={<LoadingArticlesGrid />}>
          <ArticlesContent articles={articles} />
        </Suspense> */}

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-olive-600 hover:bg-olive-700 text-white"
          >
            <Link href="/articles">See All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
