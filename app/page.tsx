import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, User, Building2 } from 'lucide-react'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import FeaturedAlumniSection from '@/components/FeaturedAlumniSection'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description: 'Welcome to the Department of Pharmacy at University of Asia Pacific. Discover our cutting-edge programs, world-class faculty, and innovative education in pharmaceutical sciences.',
  keywords: 'UAP Pharmacy, pharmacy home, pharmaceutical sciences Bangladesh, pharmacy education, UAP department, pharmacy programs',
  url: 'https://uap-pharmacy.edu.bd',
  image: '/og-image.svg'
})



async function getAlumniStats() {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NODE_ENV === 'production' 
        ? 'https://alumni-eee.vercel.app'
        : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/stats`, {
      cache: 'no-store'
    })
    if (!response.ok) {
      return {
        totalAlumni: 10,
        distinguishedAlumni: 10,
        graduationBatches: 5,
        careerReach: 'Global'
      }
    }
    const result = await response.json()
    return result.success ? result.data : {
      totalAlumni: 10,
      distinguishedAlumni: 10,
      graduationBatches: 5,
      careerReach: 'Global'
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return {
      totalAlumni: 10,
      distinguishedAlumni: 10,
      graduationBatches: 5,
      careerReach: 'Global'
    }
  }
}

export default async function Homepage() {
  const stats = await getAlumniStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to 
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                EEE Department
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our distinguished alumni network and connect with graduates who are making a difference in electrical and electronic sciences worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/alumni">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="w-6 h-6 mr-3" />
                  Explore Alumni Portal
                </Button>
              </Link>
              <Link href="/about-us">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-400 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-300 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Quick Stats */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our alumni community continues to grow and make a difference across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors">{stats.distinguishedAlumni}+</div>
              <div className="text-gray-600 font-medium text-lg">Featured Alumni</div>
              <div className="text-sm text-gray-500 mt-2">Making impact worldwide</div>
            </div>
            
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-3 group-hover:text-secondary-700 transition-colors">{stats.graduationBatches}</div>
              <div className="text-gray-600 font-medium text-lg">Graduation Batches</div>
              <div className="text-sm text-gray-500 mt-2">Years of excellence</div>
            </div>
            
            <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-3 group-hover:text-accent-700 transition-colors">{stats.careerReach}</div>
              <div className="text-gray-600 font-medium text-lg">Career Reach</div>
              <div className="text-sm text-gray-500 mt-2">Connecting communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Alumni */}
      <FeaturedAlumniSection />

      {/* Call to Action Section */}
      <div className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%2040l40-40h-40v40zm40%200v-40h-40l40%2040z%22/%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our 
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Alumni Network
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow graduates, share your achievements, and help shape the future of electrical and electronic education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/registration">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Network & Connect</h3>
                <p className="text-primary-200">Build lasting relationships with fellow alumni</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Opportunities</h3>
                <p className="text-primary-200">Post job openings and career opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Give Back</h3>
                <p className="text-primary-200">Mentor students and support the department</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}