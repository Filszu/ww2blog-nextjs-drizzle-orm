import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from '../utils/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'user rights'],
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="container mx-auto py-16 px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-olive-800">Privacy Policy</h1>
        <div className="prose prose-stone max-w-none">
          <p>Last updated: [Current Date]</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to WW2 Machines . We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.ww2machines.com] or use our services.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We collect personal information that you provide to us, such as name, email address, and any other information you choose to provide when you:</p>
          <ul>
            <li>Create an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us</li>
            <li>Participate in surveys or contests</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about our services</li>
            <li>Respond to your inquiries and comments</li>
            <li>Send you newsletters and marketing communications</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>
          
          <h2>4. Sharing of Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Legal and regulatory authorities, as required by applicable laws</li>
          </ul>
          
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict the processing of your personal information</li>
            <li>Request a copy of your personal information</li>
          </ul>
          
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last updated date.</p>
          
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [contact@ww2machines.com].</p>
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

