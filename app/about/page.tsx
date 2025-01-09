import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from '../utils/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about WW2 Machines, your premier destination for exploring the fascinating world of World War II military technology.',
  keywords: ['about', 'WW2 Machines', 'military history'],
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="container mx-auto py-16 px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-olive-800">About WW2 Machines</h1>
        <div className="prose prose-stone max-w-none">
          <p className="text-lg mb-6">
            Welcome to WW2 Machines, your premier destination for exploring the fascinating world of military technology from World War II. Our mission is to provide in-depth, accurate, and engaging content about the machines that shaped one of the most significant conflicts in human history.
          </p>
          <p className="text-lg mb-6">
            From the iconic tanks that rumbled across European battlefields to the aircraft that dueled in the skies, and the ships that fought epic naval battles, we cover it all. Our team of passionate historians and military enthusiasts work tirelessly to bring you detailed articles, stunning photographs, and insightful analysis.
          </p>
          <p className="text-lg mb-6">
            Whether you re a history buff, a model maker, or simply curious about the technological marvels of the past, WW2 Machines has something for you. We strive to make our content accessible to all, while maintaining the depth and accuracy that our subject matter demands.
          </p>
          <p className="text-lg mb-8">
            Thank you for visiting WW2 Machines. We hope you enjoy exploring the site and learning about these incredible machines as much as we enjoy sharing their stories.
          </p>
        </div>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
    </div>
  )
}

