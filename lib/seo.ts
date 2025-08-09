import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
  section?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  url,
  image,
  type = 'website',
  publishedTime,
  author,
  section
}: SEOMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uappaic.netlify.app'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/og-image.svg`

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'UAP EEE Alumni Portal',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
      type,
      ...(type === 'article' && {
        publishedTime,
        authors: author ? [author] : undefined,
        section,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@uap_eee_alumni',
      site: '@uap_eee_alumni',
    },
    alternates: {
      canonical: fullUrl
    }
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Department of Electrical and Electronic Engineering - University of Asia Pacific',
    alternateName: 'UAP EEE Department',
    url: 'https://uap-eee.edu.bd',
    logo: 'https://uap-eee.edu.bd/logo.png',
    description: 'Leading department in electrical and electronic engineering education and academics at University of Asia Pacific',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House # 73, Road # 5A',
      addressLocality: 'Dhanmondi',
      addressRegion: 'Dhaka',
      postalCode: '1205',
      addressCountry: 'BD'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-2-9664091',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.facebook.com/uapeee',
      'https://www.linkedin.com/school/university-of-asia-pacific',
      'https://twitter.com/uapeee'
    ],
    foundingDate: '1996',
    numberOfEmployees: '50-100',
    areaServed: 'Bangladesh',
    knowsAbout: [
      'Electrical Engineering',
      'Electronic Engineering',
      'Power Systems',
      'Telecommunications',
      'Control Systems',
      'Signal Processing'
    ]
  }
}

interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}

export function generateArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'UAP EEE Department',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uap-eee.edu.bd/logo.png'
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image ? {
      '@type': 'ImageObject',
      url: image
    } : undefined,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

interface PersonSchemaProps {
  name: string
  jobTitle: string
  description: string
  email: string
  image?: string
  url: string
  affiliation: string
}

export function generatePersonSchema({
  name,
  jobTitle,
  description,
  email,
  image,
  url,
  affiliation
}: PersonSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    email,
    image,
    url,
    affiliation: {
      '@type': 'Organization',
      name: affiliation
    },
    worksFor: {
      '@type': 'Organization',
      name: 'University of Asia Pacific',
      department: 'Department of Electrical and Electronic Engineering'
    }
  }
}

interface FAQSchemaProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function generateFAQSchema({ questions }: FAQSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UAP EEE Department',
    url: 'https://uap-eee.edu.bd',
    description: 'Department of Electrical and Electronic Engineering at University of Asia Pacific - Excellence in education and academics',
    publisher: {
      '@type': 'Organization',
      name: 'University of Asia Pacific'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://uap-eee.edu.bd/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
}