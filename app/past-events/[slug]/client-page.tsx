'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { LoadingLink } from '@/components/ui/loading-link'

interface PastEventClientPageProps {
  event: {
    id: string
    title: string
    date: string
    images: string[]
    link: string
    shortDescription: string
  }
  formattedDate: { day: string; month: string; year: string }
  images: string[]
  highlights: string[]
}

export default function PastEventClientPage({ 
  event, 
  formattedDate, 
  images, 
  highlights 
}: PastEventClientPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LoadingLink 
              href="/past-events" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Past Events
            </LoadingLink>
            
            <div className="mb-4">
              <Badge variant="secondary" className="bg-blue-500 text-white">
                Past Event
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate.day} {formattedDate.month} {formattedDate.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>UAP Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-600 leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Highlights */}
                {highlights.length > 0 && (
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
                      <ul className="space-y-2">
                        {highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Image Gallery */}
                {images.length > 0 && (
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-4">Event Gallery</h2>
                      <div className="relative">
                        <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                          <Image
                            src={images[currentImageIndex] || '/images/placeholder.jpg'}
                            alt={`${event.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                          />
                        </div>
                        
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {images.length}
                            </div>
                          </>
                        )}
                      </div>
                      
                      {images.length > 1 && (
                        <div className="flex gap-2 mt-4 overflow-x-auto">
                          {images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                                index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                              }`}
                            >
                              <Image
                                src={image || '/images/placeholder.jpg'}
                                alt={`Thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Date</div>
                        <div className="font-medium">{formattedDate.day} {formattedDate.month} {formattedDate.year}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Location</div>
                        <div className="font-medium">UAP Campus</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Organizer</div>
                        <div className="font-medium">EEE Alumni Association</div>
                      </div>

                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <LoadingLink 
                        href="/past-events"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                      >
                        View All Past Events
                      </LoadingLink>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}