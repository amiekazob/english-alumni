import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LoadingLink } from '@/components/ui/loading-link'
import { Calendar, Clock, User } from 'lucide-react'
import { newsData } from '@/lib/news-data'

export const metadata: Metadata = {
  title: 'News | Alumni Portal - Dept of EEE, UAP',
  description: 'Latest news and updates from the Department of Electrical and Electronic Engineering, University of Asia Pacific alumni community.',
  keywords: 'EEE, UAP, alumni, news, engineering, electrical, electronic, updates',
  openGraph: {
    title: 'News | UAP EEE Alumni Portal',
    description: 'Latest news and updates from the Department of Electrical and Electronic Engineering, University of Asia Pacific alumni community.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/news`,
    siteName: 'UAP EEE Alumni Portal',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/hero/1.jpg`,
        width: 1200,
        height: 630,
        alt: 'UAP EEE Alumni News',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | UAP EEE Alumni Portal',
    description: 'Latest news and updates from the Department of Electrical and Electronic Engineering, University of Asia Pacific alumni community.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/hero/1.jpg`],
    creator: '@uap_eee_alumni',
    site: '@uap_eee_alumni',
  },
}

// News data imported from lib/news-data.ts
const newsItems = newsData

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest News
            </h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest happenings in our alumni community
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                      <LoadingLink href={`/news/${item.slug}`}>
                        {item.title}
                      </LoadingLink>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>By {item.author}</span>
                      </div>
                      <LoadingLink 
                        href={`/news/${item.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </LoadingLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More News
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}