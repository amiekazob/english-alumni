import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LoadingLink } from '@/components/ui/loading-link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { newsData, NewsItem } from '@/lib/news-data'

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const article = newsData.find(item => item.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found | Alumni Portal - Dept of Pharmacy, UAP'
    }
  }

  return {
    title: `${article.title} | Alumni Portal - Dept of Pharmacy, UAP`,
    description: article.excerpt,
  }
}

export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }))
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsData.find(item => item.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LoadingLink 
              href="/news" 
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </LoadingLink>
            
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center text-blue-100 space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Related News</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {newsData
                  .filter(item => item.id !== article.id && item.category === article.category)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Card key={relatedArticle.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {relatedArticle.category}
                        </Badge>
                        <h4 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                          <LoadingLink href={`/news/${relatedArticle.slug}`}>
                            {relatedArticle.title}
                          </LoadingLink>
                        </h4>
                        <p className="text-gray-600">
                          {relatedArticle.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                          </div>
                          <LoadingLink 
                            href={`/news/${relatedArticle.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Read More →
                          </LoadingLink>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}