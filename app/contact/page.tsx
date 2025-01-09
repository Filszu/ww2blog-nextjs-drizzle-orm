import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { generateMetadata } from '../utils/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the WW2 Machines team. We\'d love to hear from you!',
  keywords: ['contact', 'feedback', 'support'],
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="container mx-auto py-16 px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-olive-800">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question about our content, want to suggest a topic, or just want to say hello, please feel free to reach out using the form below.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" name="name" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" name="email" type="email" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows={5} required className="mt-1" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

