'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { VerificationBadge } from '@/components/ui/verification-badge'
import { Users, User, Mail, Linkedin, Facebook, Instagram, Globe } from 'lucide-react'

interface Alumni {
  Name: string
  Batch: string
  Position: string
  Company: string
  Country: string
  Photo: string
  Email?: string
  LinkedIn?: string
  Facebook?: string
  Instagram?: string
  Website?: string
  verified?: number
  blue_verified?: number
}

export default function FeaturedAlumniSection() {
  const [featuredAlumni, setFeaturedAlumni] = useState<Alumni[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFeaturedAlumni() {
      try {
        const response = await fetch('/api/featured-alumni', {
          cache: 'no-store'
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch featured alumni')
        }
        
        const result = await response.json()
        const alumni = result.success ? result.data : []
        setFeaturedAlumni(alumni.slice(0, 20))
      } catch (error) {
        console.error('Error fetching featured alumni:', error)
        setError('Failed to load featured alumni')
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedAlumni()
  }, [])

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Alumni
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our distinguished alumni network and connect with graduates who are making a difference in engineering worldwide
            </p>
          </div>
          
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Users className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-lg text-gray-500 mb-2">Loading featured alumni...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-30 -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full opacity-30 translate-y-40 -translate-x-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Alumni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our distinguished alumni network and connect with graduates who are making a difference in engineering worldwide
          </p>
        </div>
        
        {featuredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredAlumni.map((alumni: Alumni, index: number) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-indigo-100">
                    <Image
                      src={`/images/feature_alumni/${alumni.Batch}/${alumni.Photo}`}
                      alt={alumni.Name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/images/default-avatar.png'
                      }}
                    />
                  </div>
                </div>
                
                <CardContent className="px-6 pt-6 pb-4">
                  {/* Name and Batch */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2 flex items-center justify-center gap-2">
                      {alumni.Name}
                      {/* Verification Badges */}
                      {alumni.blue_verified === 1 && (
                        <VerificationBadge type="blue_verified" size="md" />
                      )}
                      {alumni.verified === 1 && alumni.blue_verified !== 1 && (
                        <VerificationBadge type="verified" size="md" />
                      )}
                    </h3>
                    <Badge variant="default" className="mb-3">
                      Batch {alumni.Batch}
                    </Badge>
                  </div>
                  
                  {/* Position and Company */}
                  <div className="text-center mb-4">
                    <p className="font-semibold text-gray-800 mb-1">{alumni.Position}</p>
                    <p className="text-gray-600 text-sm mb-2">{alumni.Company}</p>
                    <Badge variant="outline" className="text-xs">
                      {alumni.Country}
                    </Badge>
                  </div>
                  
                  {/* Social Links */}
                  {(alumni.Email || alumni.LinkedIn || alumni.Facebook || alumni.Instagram || alumni.Website) && (
                    <div className="border-t pt-4">
                      <div className="flex justify-center space-x-3">
                        {alumni.Email && (
                          <Link 
                            href={`mailto:${alumni.Email}`}
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </Link>
                        )}
                        {alumni.LinkedIn && (
                          <Link 
                            href={alumni.LinkedIn} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {alumni.Website && (
                          <Link 
                            href={alumni.Website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <Globe className="w-5 h-5" />
                          </Link>
                        )}
                        {alumni.Facebook && (
                          <Link 
                            href={alumni.Facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Facebook className="w-5 h-5" />
                          </Link>
                        )}
                        {alumni.Instagram && (
                          <Link 
                            href={alumni.Instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-800 transition-colors"
                          >
                            <Instagram className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-lg text-gray-500 mb-2">
              {error ? error : 'No featured alumni available at the moment.'}
            </p>
            <p className="text-gray-400">Check back soon for updates!</p>
          </div>
        )}
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/featured-alumni">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5 mr-2" />
                View All Featured Alumni
              </Button>
            </Link>
            <Link href="/alumni">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                <User className="w-5 h-5 mr-2" />
                Browse All Alumni
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}