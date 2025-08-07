'use client'

// Types for social media sharing
export interface ShareContent {
  url: string
  title: string
  description?: string
  image?: string
  hashtags?: string[]
  category?: 'news' | 'event' | 'announcement'
}

export interface ShareAnalytics {
  platform: string
  contentId: string
  contentType: 'news' | 'upcoming-event' | 'past-event'
  timestamp: string
  url: string
}

// Social media platform configurations
export const SOCIAL_PLATFORMS = {
  facebook: {
    name: 'Facebook',
    baseUrl: 'https://www.facebook.com/sharer/sharer.php',
    params: (content: ShareContent) => ({
      u: content.url,
      quote: `${content.title}${content.description ? ` - ${content.description}` : ''}`
    })
  },
  twitter: {
    name: 'Twitter',
    baseUrl: 'https://twitter.com/intent/tweet',
    params: (content: ShareContent) => {
      const text = `${content.title}${content.description ? ` - ${content.description}` : ''}`
      const hashtags = content.hashtags?.length 
        ? content.hashtags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ')
        : '#EEE #UAP #Programming #AI'
      return {
        url: content.url,
        text: `${text} ${hashtags}`.trim()
      }
    }
  },
  linkedin: {
    name: 'LinkedIn',
    baseUrl: 'https://www.linkedin.com/sharing/share-offsite/',
    params: (content: ShareContent) => ({
      url: content.url,
      title: content.title,
      summary: content.description || ''
    })
  },
  whatsapp: {
    name: 'WhatsApp',
    baseUrl: 'https://wa.me/',
    params: (content: ShareContent) => ({
      text: `${content.title}\n${content.description || ''}\n${content.url}`
    })
  },
  telegram: {
    name: 'Telegram',
    baseUrl: 'https://t.me/share/url',
    params: (content: ShareContent) => ({
      url: content.url,
      text: `${content.title}${content.description ? ` - ${content.description}` : ''}`
    })
  }
} as const

export type SocialPlatform = keyof typeof SOCIAL_PLATFORMS

// Social Media API Class
export class SocialMediaAPI {
  private analytics: ShareAnalytics[] = []

  /**
   * Generate share URL for a specific platform
   */
  generateShareUrl(platform: SocialPlatform, content: ShareContent): string {
    const config = SOCIAL_PLATFORMS[platform]
    const params = config.params(content)
    const searchParams = new URLSearchParams(params as Record<string, string>)
    return `${config.baseUrl}?${searchParams.toString()}`
  }

  /**
   * Share content on a specific platform
   */
  async shareContent(
    platform: SocialPlatform, 
    content: ShareContent,
    options: {
      trackAnalytics?: boolean
      windowFeatures?: string
      contentId?: string
      contentType?: 'news' | 'upcoming-event' | 'past-event'
    } = {}
  ): Promise<void> {
    const {
      trackAnalytics = true,
      windowFeatures = 'width=600,height=400,scrollbars=yes,resizable=yes',
      contentId = '',
      contentType = 'news'
    } = options

    try {
      const shareUrl = this.generateShareUrl(platform, content)
      
      // Open share window
      const shareWindow = window.open(shareUrl, '_blank', windowFeatures)
      
      if (!shareWindow) {
        throw new Error('Popup blocked. Please allow popups for this site.')
      }

      // Track analytics if enabled
      if (trackAnalytics) {
        this.trackShare({
          platform,
          contentId,
          contentType,
          timestamp: new Date().toISOString(),
          url: content.url
        })
      }

      // Focus the share window
      shareWindow.focus()
    } catch (error) {
      console.error(`Failed to share on ${platform}:`, error)
      throw error
    }
  }

  /**
   * Copy content URL to clipboard
   */
  async copyToClipboard(url: string): Promise<boolean> {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url)
        return true
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = url
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const result = document.execCommand('copy')
        textArea.remove()
        return result
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      return false
    }
  }

  /**
   * Track sharing analytics
   */
  private trackShare(analytics: ShareAnalytics): void {
    this.analytics.push(analytics)
    
    // Store in localStorage for persistence
    try {
      const existingAnalytics = JSON.parse(localStorage.getItem('share_analytics') || '[]')
      existingAnalytics.push(analytics)
      localStorage.setItem('share_analytics', JSON.stringify(existingAnalytics))
    } catch (error) {
      console.warn('Failed to store analytics:', error)
    }
  }

  /**
   * Get sharing analytics
   */
  getAnalytics(): ShareAnalytics[] {
    try {
      const stored = localStorage.getItem('share_analytics')
      return stored ? JSON.parse(stored) : this.analytics
    } catch (error) {
      console.warn('Failed to retrieve analytics:', error)
      return this.analytics
    }
  }

  /**
   * Clear analytics data
   */
  clearAnalytics(): void {
    this.analytics = []
    try {
      localStorage.removeItem('share_analytics')
    } catch (error) {
      console.warn('Failed to clear analytics:', error)
    }
  }

  /**
   * Generate shareable content for news
   */
  static createNewsShareContent(news: {
    id: number
    title: string
    shortDescription?: string
    category: string
    link: string
  }): ShareContent {
    const baseUrl = typeof window !== 'undefined' 
      ? `${window.location.protocol}//${window.location.host}`
      : 'https://eee-uap.edu.bd'
    
    return {
      url: `${baseUrl}${news.link}`,
      title: news.title,
      description: news.shortDescription,
      hashtags: ['EEE', 'UAP', 'News', news.category.replace(/\s+/g, '')],
      category: 'news'
    }
  }

  /**
   * Generate shareable content for events
   */
  static createEventShareContent(event: {
    id: number
    title: string
    description?: string
    shortDescription?: string
    date: string
    location?: string
    category: string
  }, type: 'upcoming' | 'past' = 'upcoming'): ShareContent {
    const baseUrl = typeof window !== 'undefined' 
      ? `${window.location.protocol}//${window.location.host}`
      : 'https://eee-uap.edu.bd'
    
    const eventDate = new Date(event.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    const description = event.description || event.shortDescription
    const fullDescription = type === 'upcoming' 
      ? `${description} | Date: ${eventDate}${event.location ? ` | Location: ${event.location}` : ''}`
      : `${description} | Held on: ${eventDate}`
    
    return {
      url: `${baseUrl}/${type === 'upcoming' ? 'upcoming-events' : 'past-events'}`,
      title: event.title,
      description: fullDescription,
      hashtags: ['EEE', 'UAP', 'Event', event.category.replace(/\s+/g, ''), type === 'upcoming' ? 'UpcomingEvent' : 'PastEvent'],
      category: 'event'
    }
  }

  /**
   * Check if Web Share API is supported
   */
  static isWebShareSupported(): boolean {
    return typeof navigator !== 'undefined' && 'share' in navigator
  }

  /**
   * Use native Web Share API if available
   */
  async nativeShare(content: ShareContent): Promise<boolean> {
    if (!SocialMediaAPI.isWebShareSupported()) {
      return false
    }

    try {
      await navigator.share({
        title: content.title,
        text: content.description,
        url: content.url
      })
      return true
    } catch (error) {
      // User cancelled or error occurred
      console.warn('Native share failed:', error)
      return false
    }
  }
}

// Export singleton instance
export const socialMediaAPI = new SocialMediaAPI()

// Utility functions
export const generateShareableUrl = (path: string): string => {
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : 'https://eee-uap.edu.bd'
  
  return `${baseUrl}${path}`
}

export const getDefaultHashtags = (category?: string): string[] => {
  const base = ['EEE', 'UAP', 'Programming', 'AI']
  if (category) {
    base.push(category.replace(/\s+/g, ''))
  }
  return base
}