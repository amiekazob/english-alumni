'use client'

import { createContext, useContext, useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

function LoadingProviderInner({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  useEffect(() => {
    // Hide loading when route changes complete
    setIsLoading(false)
  }, [pathname, searchParams])

  useEffect(() => {
    // Handle browser navigation (back/forward buttons)
    const handlePopState = () => {
      setIsLoading(true)
      // Set a timeout to hide loading after navigation completes
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      
      return () => clearTimeout(timer)
    }

    // Handle page visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isLoading) {
        // If page becomes visible and we're loading, stop loading
        setTimeout(() => setIsLoading(false), 300)
      }
    }

    // Handle page load events
    const handleLoad = () => {
      setIsLoading(false)
    }

    const handleBeforeUnload = () => {
      setIsLoading(true)
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('load', handleLoad)
    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isLoading])

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm font-medium text-foreground">Loading...</p>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  )
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <LoadingProviderInner>{children}</LoadingProviderInner>
    </Suspense>
  )
}

export default LoadingProvider