'use client'

import { SocialShare, useShareableUrl } from '@/components/ui/social-share'

interface NewsSocialShareProps {
  slug: string
  title: string
  excerpt: string
  category: string
  variant?: 'minimal' | 'default' | 'floating'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function NewsSocialShare({
  slug,
  title,
  excerpt,
  category,
  variant = 'minimal',
  size = 'md',
  className
}: NewsSocialShareProps) {
  const shareableUrl = useShareableUrl(`/news/${slug}`)

  return (
    <SocialShare
      url={shareableUrl}
      title={title}
      description={excerpt}
      hashtags={['EEE', 'UAP', 'Alumni', category.replace(/\s+/g, '')]}
      variant={variant}
      size={size}
      className={className}
    />
  )
}