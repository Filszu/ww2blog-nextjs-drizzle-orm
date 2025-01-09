"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('articles')
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4">
          The Machines of World War II
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Dive into the history of WW2 machines — tanks, planes, ships, and more.
        </p>
        <Button 
          size="lg" 
          className="bg-olive-600 hover:bg-olive-700 text-white"
          onClick={scrollToArticles}
        >
          Explore Now
        </Button>
      </motion.div>
    </section>
  )
}

