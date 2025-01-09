"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Specification {
  label: string
  value: string
}

interface ArticleProps {
  title: string
  mainImage: string
  content: string
  specifications: Specification[]
  exampleImages: string[]
}

export function ArticlePage({ title, mainImage, content, specifications, exampleImages }: ArticleProps) {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-olive-800 font-playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src={mainImage} alt={title} width={600} height={400} className="rounded-lg shadow-lg" />
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
                <ul className="space-y-2">
                  {specifications.map((spec, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="font-semibold">{spec.label}:</span>
                      <span>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          className="prose prose-stone max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-olive-800 font-playfair">Example Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exampleImages.map((img, index) => (
              <Image key={index} src={img} alt={`Example ${index + 1}`} width={400} height={300} className="rounded-lg shadow-md" />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-center text-gray-600">Banner Ad Space</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

