import { Metadata } from 'next'

interface GenerateMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  twitterImage?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = 'https://ww2machines.com/og-image.jpg',
  twitterImage = 'https://ww2machines.com/twitter-image.jpg'
}: GenerateMetadataProps): Metadata {
  return {
    title: `${title} | WW2 Military Machines Blog`,
    description,
    keywords: ['WW2', 'World War II', 'military machines', ...keywords],
    authors: [{ name: 'WW2 Machines Team' }],
    openGraph: {
      title,
      description,
      url: 'https://ww2machines.com',
      siteName: 'WW2 Machines',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage],
    },
  }
}

