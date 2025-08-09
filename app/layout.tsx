import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PerformanceMonitor } from '@/components/ui/performance-monitor'
import { LoadingProvider } from '@/components/ui/loading-provider'
import { NavigationWrapper } from '@/components/ui/navigation-wrapper'
import Script from 'next/script'
import { generateOrganizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: 'Department of Electrical and Electronic Engineering - University of Asia Pacific',
    template: '%s | UAP EEE Department'
  },
  description: 'Leading department in electrical and electronic engineering education at University of Asia Pacific. Offering BSc and MSc programs with cutting-edge facilities and expert faculty.',
  keywords: 'electrical engineering, electronic engineering, UAP, University of Asia Pacific, engineering education, Bangladesh, EEE department',
  authors: [{ name: 'UAP EEE Department' }],
  creator: 'UAP EEE Department',
  publisher: 'University of Asia Pacific',
  metadataBase: new URL('https://uappaic.netlify.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uappaic.netlify.app',
    siteName: 'UAP EEE Department',
    title: 'EEE Alumni Portal - University of Asia Pacific',
    description: 'Leading department in electrical and electronic engineering education at University of Asia Pacific.',
    images: [
      {
        url: 'https://uappaic.netlify.app/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'UAP EEE Department'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Department of Electrical and Electronic Engineering - University of Asia Pacific',
    description: 'Leading department in electrical and electronic engineering education at University of Asia Pacific.',
    images: ['https://uappaic.netlify.app/og-image.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <LoadingProvider>
          <NavigationWrapper>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </NavigationWrapper>
          <PerformanceMonitor />
        </LoadingProvider>
      </body>
    </html>
  )
}
