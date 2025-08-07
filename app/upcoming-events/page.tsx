'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star, ChevronRight, Filter, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { SocialShare, useShareableUrl } from '@/components/ui/social-share'
import { SocialMediaAPI } from '@/lib/social-media-api'
import { NewsEvents } from '@/lib/events-data'

type UpcomingEvent = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
  priority: 'high' | 'medium' | 'low'
  registrationRequired: boolean
  maxParticipants?: number
  currentParticipants?: number
  organizer: string
  tags: string[]
}

// Use events from the external data source
const upcomingEventsData: UpcomingEvent[] = NewsEvents.map(event => ({
  id: event.id,
  title: event.title,
  date: event.date,
  time: event.time || '10:00 AM',
  location: event.location || 'TBA',
  description: event.description,
  image: event.image,
  category: event.category,
  priority: 'high' as const,
  registrationRequired: true,
  organizer: event.organizer || 'EEE Department',
  tags: event.tags || []
}))

// Countdown timer hook
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

// Priority badge component
function PriorityBadge({ priority }: { priority: 'high' | 'medium' | 'low' }) {
  const variants = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  }

  return (
    <Badge className={cn('border', variants[priority])}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
    </Badge>
  )
}

// Event card component
function EventCard({ event }: { event: UpcomingEvent }) {
  const countdown = useCountdown(event.date)
  const isEventSoon = countdown.days <= 7
  const registrationProgress = event.maxParticipants 
    ? (event.currentParticipants || 0) / event.maxParticipants * 100 
    : 0

  return (
    <StaggeredItem>
      <Card className={cn(
        "overflow-hidden h-full flex flex-col group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1",
        isEventSoon && "ring-2 ring-orange-400 ring-opacity-50"
      )}>
        <div className="relative">
          <Image
            src={event.image}
            alt={event.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <PriorityBadge priority={event.priority} />
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <Badge className="bg-blue-600 text-white">{event.category}</Badge>
          </div>
          {isEventSoon && (
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              <Star className="w-4 h-4 inline mr-1" />
              Event Soon!
            </div>
          )}
        </div>
        
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
            {event.description}
          </p>
          
          {/* Event Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              <span>{event.location}</span>
            </div>
            {event.registrationRequired && event.maxParticipants && (
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                <span>{event.currentParticipants || 0}/{event.maxParticipants} registered</span>
              </div>
            )}
          </div>
          
          {/* Registration Progress */}
          {event.registrationRequired && event.maxParticipants && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Registration Progress</span>
                <span>{Math.round(registrationProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    registrationProgress > 80 ? "bg-red-500" : 
                    registrationProgress > 60 ? "bg-yellow-500" : "bg-green-500"
                  )}
                  style={{ width: `${registrationProgress}%` }}
                />
              </div>
            </div>
          )}
          
          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-1">Time Remaining</div>
              <div className="flex justify-center space-x-2 text-sm font-bold">
                <div className="bg-white rounded px-2 py-1 shadow">
                  <div className="text-blue-600">{countdown.days}</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="bg-white rounded px-2 py-1 shadow">
                  <div className="text-blue-600">{countdown.hours}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="bg-white rounded px-2 py-1 shadow">
                  <div className="text-blue-600">{countdown.minutes}</div>
                  <div className="text-xs text-gray-500">Min</div>
                </div>
                <div className="bg-white rounded px-2 py-1 shadow">
                  <div className="text-blue-600">{countdown.seconds}</div>
                  <div className="text-xs text-gray-500">Sec</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {event.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {event.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{event.tags.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3 mt-auto">
            <div className="flex gap-2">
              {event.registrationRequired ? (
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Register Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button variant="outline" className="flex-1">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
            <div className="flex justify-center">
              <SocialShare
                url={useShareableUrl('/upcoming-events')}
                title={event.title}
                description={event.description}
                hashtags={['EEE', 'UAP', 'UpcomingEvent', event.category, ...event.tags.slice(0, 2)]}
                variant="minimal"
                size="sm"
              />
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-2 text-center">
            Organized by {event.organizer}
          </div>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function UpcomingEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  const categories = ['All', ...Array.from(new Set(upcomingEventsData.map(event => event.category)))]
  
  const filteredEvents = useMemo(() => {
    return upcomingEventsData.filter(event => {
      const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory
      const searchMatch = searchTerm === '' || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      return categoryMatch && searchMatch
    }).sort((a, b) => {
      // Sort by date (earliest first) and then by priority
      const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime()
      if (dateComparison !== 0) return dateComparison
      
      const priorityOrder: { [key: string]: number } = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority || 'medium'] - priorityOrder[b.priority || 'medium']
    })
  }, [selectedCategory, searchTerm])
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4 py-16" suppressHydrationWarning={true}>
        {/* Hero Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <div className="relative" suppressHydrationWarning={true}>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Upcoming Events
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" suppressHydrationWarning={true}></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on exciting opportunities! Join our upcoming workshops, competitions, and tech talks designed to enhance your skills and expand your network.
          </p>
        </AnimatedSection>
        
        {/* Stats Section */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" suppressHydrationWarning={true}>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100" suppressHydrationWarning={true}>
              <div className="text-3xl font-bold text-blue-600 mb-2" suppressHydrationWarning={true}>{filteredEvents.length}</div>
              <div className="text-gray-600" suppressHydrationWarning={true}>Upcoming Events</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-purple-100" suppressHydrationWarning={true}>
              <div className="text-3xl font-bold text-purple-600 mb-2" suppressHydrationWarning={true}>
                {filteredEvents.filter(e => e.registrationRequired).length}
              </div>
              <div className="text-gray-600" suppressHydrationWarning={true}>Registration Required</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100" suppressHydrationWarning={true}>
              <div className="text-3xl font-bold text-green-600 mb-2" suppressHydrationWarning={true}>
                {filteredEvents.filter(e => e.priority === 'high').length}
              </div>
              <div className="text-gray-600" suppressHydrationWarning={true}>High Priority Events</div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Filters Section */}
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </StaggeredGrid>
        ) : (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </AnimatedSection>
        )}
        
        {/* Call to Action */}
        <AnimatedSection animation="fadeIn" delay={0.4} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Want to Organize an Event?</h2>
            <p className="text-xl mb-6 opacity-90">
              Have an idea for a workshop, seminar, or competition? We'd love to hear from you!
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Submit Event Proposal
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}