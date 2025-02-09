"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@/db/schema";
import Link from "next/link";
import wt from "@/public/images/ads/wt.jpg";
export function ArticleContent({ article }: { article: Article }) {
  const sections = [
    {
      title: "Development and Production",
      content: article.development_and_production,
    },
    { title: "Combat Performance", content: article.combat_performance },
    { title: "Legacy", content: article.legacy },
  ];

  return (
    <>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center font-playfair"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {article.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-stone max-w-none"
                dangerouslySetInnerHTML={{
                  __html: article.specifications || "",
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center relative max-w-full">
        <span className="bg-white opacity-70 backdrop-filter backdrop-blur-lg px-2 py-1 rounded-lg shadow-md absolute top-0 ">AD</span>
        <Link
          href={
            "https://naiawork.com/g/3oqdtx0q5jbff4c1d2f51715a9e553/https://naiawork.com/g/3oqdtx0q5jbff4c1d2f51715a9e553/"
          }
          target="_blank"
        >
          <Image
            src={wt}
            alt={"War thunder ad"}
            width={400}
            height={300}
            className="object-cover mt-6"
          />
        </Link>
        
      </div>

      <div className="space-y-8 prose prose-stone max-w-none">
        {sections.map(
          (section) =>
            section.content && (
              <div key={section.title}>
                <h2>{section.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            )
        )}
      </div>
      
    </>
  );
}
