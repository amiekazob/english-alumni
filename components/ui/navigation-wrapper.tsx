'use client'

import { useRouter } from 'next/navigation'
import { useLoading } from './loading-provider'
import { ReactNode, MouseEvent } from 'react'

interface NavigationWrapperProps {
  children: ReactNode
}

export function NavigationWrapper({ children }: NavigationWrapperProps) {
  const router = useRouter()
  const { setLoading } = useLoading()

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const link = target.closest('a')
    
    if (link) {
      const href = link.getAttribute('href')
      
      // Check if it's an internal link
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        // Don't prevent default for anchor links on same page
        if (href.includes('#')) {
          return
        }
        
        // Check if it's the same page
        if (href === window.location.pathname) {
          return
        }
        
        event.preventDefault()
        setLoading(true)
        
        // Navigate to the new page
        router.push(href)
      }
    }
  }

  return (
    <div onClick={handleClick} suppressHydrationWarning={true}>
      {children}
    </div>
  )
}

export default NavigationWrapper