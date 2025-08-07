import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery | Alumni Portal - Dept of Pharmacy, UAP',
  description: 'Photo gallery showcasing memorable moments from alumni events, campus life, and achievements.',
}

// Sample gallery data - replace with actual data source
const galleryItems = [
  {
    id: 1,
    title: 'Alumni Reunion 2024',
    description: 'Memorable moments from our annual alumni gathering',
    date: '2024-01-15',
    category: 'Events',
    imageCount: 25,
    coverImage: '/images/placeholder.jpg',
    slug: 'alumni-reunion-2024'
  }
  
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-purple-100">
              Capturing memories and moments from our alumni community
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.coverImage} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-300">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.imageCount} photos
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Load More Albums
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Total Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Photo Albums</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Events Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}