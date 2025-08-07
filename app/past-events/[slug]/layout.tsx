import { Metadata } from 'next'
import { PastEventsData } from '@/lib/past-events-data'

interface LayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const event = PastEventsData.find(event => event.id === params.slug)
  
  if (!event) {
    return {
      title: 'Past Event Not Found | EEE UAP',
      description: 'The requested past event could not be found.'
    }
  }

  return {
    title: `${event.title} | Past Events | EEE UAP`,
    description: event.shortDescription || `Past event: ${event.title}`,
    keywords: [
      'EEE UAP',
      'Past Events',
      event.title,
      'University of Asia Pacific',
      'Electrical and Electronic Engineering'
    ],
    openGraph: {
      title: `${event.title} | Past Events | EEE UAP`,
      description: event.shortDescription || `Past event: ${event.title}`,
      type: 'article',
      publishedTime: event.date,
      images: event.images.length > 0 ? [{
        url: event.images[0],
        width: 1200,
        height: 630,
        alt: event.title
      }] : [],
      siteName: 'EEE UAP'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${event.title} | Past Events | EEE UAP`,
      description: event.shortDescription || `Past event: ${event.title}`,
      images: event.images.length > 0 ? [event.images[0]] : []
    }
  }
}

export default function PastEventLayout({ children }: LayoutProps) {
  return children
}