"use client"

import { useState, useEffect } from 'react'

// Generic lazy data loader hook
export function useLazyData<T>(importFn: () => Promise<{ default: T } | T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true
    
    const loadData = async () => {
      if (data || loading) return
      
      setLoading(true)
      setError(null)
      
      try {
        const result = await importFn()
        if (isMounted) {
          // Handle both default exports and named exports
          const loadedData = (result as any).default || result
          setData(loadedData as T)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to load data'))
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadData()
    
    return () => {
      isMounted = false
    }
  }, deps)

  return { data, loading, error }
}

// Specific hooks for different data types
// Faculty data loader removed - faculty data has been deleted
// export function useLazyFacultyData() {
//   return useLazyData(() => import('@/lib/faculty-data').then(m => m.facultyMembers))
// }

// Publications data loader removed - publications page now uses static content

export function useLazyEventsData() {
  return useLazyData(async () => {
    const [currentEvents, pastEvents] = await Promise.all([
      import('@/lib/events-data').then(m => m.events),
      import('@/lib/past-events-data').then(m => m.PastEventsData)
    ]);
    return [...currentEvents, ...pastEvents];
  });
}