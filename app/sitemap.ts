import { MetadataRoute } from 'next'
import { events } from '@/lib/events-data'
import { PastEventsData } from '@/lib/past-events-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uap-eee.edu.bd'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/committee`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/upcoming-events`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/past-events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs/bsc-eee`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs/msc-eee`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/message-from-head`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academic-calendar`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Faculty pages removed - faculty data has been deleted

  // News/Event pages (combine current events and past events)
  const allEvents = [...events, ...PastEventsData];
  const newsPages = allEvents.map((event) => ({
    url: `${baseUrl}${event.link}`,
    lastModified: new Date(event.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...newsPages]
}