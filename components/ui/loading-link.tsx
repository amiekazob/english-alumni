'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLoading } from './loading-provider'
import { ReactNode, MouseEvent } from 'react'

interface LoadingLinkProps {
  href: string
  children: ReactNode
  className?: string
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean
  [key: string]: any
}

export function LoadingLink({ 
  href, 
  children, 
  className, 
  replace = false,
  scroll = true,
  prefetch = true,
  ...props 
}: LoadingLinkProps) {
  const router = useRouter()
  const { setLoading } = useLoading()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Check if it's an external link
    if (href.startsWith('http') || href.startsWith('//')) {
      return // Let the default behavior handle external links
    }

    // Check if it's an anchor link on the same page
    if (href.includes('#')) {
      return // Let the default behavior handle anchor links
    }

    // Check if it's the same page
    if (href === window.location.pathname) {
      return
    }

    // For internal navigation, show loading
    event.preventDefault()
    setLoading(true)
    
    if (replace) {
      router.replace(href)
    } else {
      router.push(href)
    }
  }

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
      scroll={scroll}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LoadingLink