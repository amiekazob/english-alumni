'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Share2, Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SocialShareProps {
  url: string
  title: string
  description?: string
  hashtags?: string[]
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal' | 'floating'
}

interface SharePlatform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  getShareUrl: (url: string, title: string, description?: string, hashtags?: string[]) => string
  color: string
}

const sharePlatforms: SharePlatform[] = [
  {
    name: 'Facebook',
    icon: Facebook,
    getShareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        u: url,
        quote: `${title}${description ? ` - ${description}` : ''}`
      })
      return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
    },
    color: 'hover:bg-blue-600 hover:text-white'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    getShareUrl: (url, title, description, hashtags) => {
      const text = `${title}${description ? ` - ${description}` : ''}`
      const hashtagString = hashtags?.length ? hashtags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ') : ''
      const params = new URLSearchParams({
        url,
        text: `${text} ${hashtagString}`.trim()
      })
      return `https://twitter.com/intent/tweet?${params.toString()}`
    },
    color: 'hover:bg-sky-500 hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    getShareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        url,
        title,
        summary: description || ''
      })
      return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
    },
    color: 'hover:bg-blue-700 hover:text-white'
  }
]

export function SocialShare({
  url,
  title,
  description,
  hashtags = [],
  className,
  size = 'md',
  variant = 'default'
}: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = (platform: SharePlatform) => {
    const shareUrl = platform.getShareUrl(url, title, description, hashtags)
    window.open(shareUrl, '_blank', 'width=600,height=400')
    setIsOpen(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        {sharePlatforms.map((platform) => (
          <Button
            key={platform.name}
            variant="outline"
            size="sm"
            onClick={() => handleShare(platform)}
            className={cn(
              'transition-colors duration-200',
              platform.color,
              sizeClasses[size]
            )}
            title={`Share on ${platform.name}`}
          >
            <platform.icon className={iconSizes[size]} />
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className={cn(
            'transition-colors duration-200 hover:bg-gray-600 hover:text-white',
            sizeClasses[size]
          )}
          title="Copy link"
        >
          {copied ? (
            <Check className={iconSizes[size]} />
          ) : (
            <Link2 className={iconSizes[size]} />
          )}
        </Button>
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <div className={cn('fixed right-4 top-1/2 transform -translate-y-1/2 z-50', className)}>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'bg-white shadow-lg hover:shadow-xl transition-all duration-200',
              sizeClasses[size]
            )}
            title="Share"
          >
            <Share2 className={iconSizes[size]} />
          </Button>
          {isOpen && (
            <div className="flex flex-col gap-2 animate-in slide-in-from-right-2">
              {sharePlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare(platform)}
                  className={cn(
                    'bg-white shadow-lg hover:shadow-xl transition-all duration-200',
                    platform.color,
                    sizeClasses[size]
                  )}
                  title={`Share on ${platform.name}`}
                >
                  <platform.icon className={iconSizes[size]} />
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className={cn(
                  'bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-600 hover:text-white',
                  sizeClasses[size]
                )}
                title="Copy link"
              >
                {copied ? (
                  <Check className={iconSizes[size]} />
                ) : (
                  <Link2 className={iconSizes[size]} />
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-3">Share this content</p>
              {sharePlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant="ghost"
                  onClick={() => handleShare(platform)}
                  className={cn(
                    'w-full justify-start gap-3 transition-colors duration-200',
                    platform.color
                  )}
                >
                  <platform.icon className="w-4 h-4" />
                  {platform.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={copyToClipboard}
                className="w-full justify-start gap-3 hover:bg-gray-100 transition-colors duration-200"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Link2 className="w-4 h-4" />
                )}
                {copied ? 'Copied!' : 'Copy link'}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Hook for generating shareable URLs
export function useShareableUrl(path: string) {
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : 'https://eee-uap.edu.bd' // fallback for SSR
  
  return `${baseUrl}${path}`
}