import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PastEventsData } from '@/lib/past-events-data'
import PastEventClientPage from './client-page'
import { formatDate } from '@/lib/past-events-data'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const event = PastEventsData.find(event => event.id === params.slug)
  
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.'
    }
  }

  const baseUrl = 'https://uappaic.netlify.app'
  const canonicalUrl = `${baseUrl}/past-events/${event.id}`
  const absoluteImages = event.images.map(image => 
    image.startsWith('http') ? image : `${baseUrl}${image}`
  )

  return {
    title: `${event.title} | EEE UAP`,
    description: event.shortDescription || `Past event: ${event.title}`,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: event.title,
      description: event.shortDescription || `Past event: ${event.title}`,
      type: 'article',
      url: canonicalUrl,
      siteName: 'UAP EEE Department',
      images: absoluteImages.length > 0 ? [{
        url: absoluteImages[0],
        width: 1200,
        height: 630,
        alt: event.title
      }] : [{
        url: `${baseUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: event.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.shortDescription || `Past event: ${event.title}`,
      images: absoluteImages.length > 0 ? [absoluteImages[0]] : [`${baseUrl}/og-image.svg`],
      site: '@uap_eee'
    }
  }
}

export async function generateStaticParams() {
  return PastEventsData.map((event) => ({
    slug: event.id,
  }))
}

export default function PastEventPage({ params }: PageProps) {
  const event = PastEventsData.find(event => event.id === params.slug)
  
  if (!event) {
    notFound()
  }

  const formattedDate = formatDate(event.date)
  const highlights: string[] = []

  return (
    <PastEventClientPage 
      event={event}
      formattedDate={formattedDate}
      images={event.images}
      highlights={highlights}
    />
  )
}