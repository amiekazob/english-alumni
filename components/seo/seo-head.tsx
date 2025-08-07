'use client'

import Head from 'next/head'
import { generateBreadcrumbSchema } from '@/lib/seo'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  structuredData?: object
}

export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  breadcrumbs,
  structuredData
}: SEOHeadProps) {
  const breadcrumbSchema = breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : null

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UAP EEE Department" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
      
      {/* Structured Data */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}