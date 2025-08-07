"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
  bundleSize?: number
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Measure page load performance
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const loadTime = navigation.loadEventEnd - navigation.startTime
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        
        // Memory usage (if available)
        const memoryUsage = (performance as any).memory?.usedJSHeapSize
        
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined
        })
      }
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  return metrics
}

// Development-only performance display component
export function PerformanceMonitor() {
  const metrics = usePerformanceMonitor()
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>FCP: {metrics.renderTime}ms</div>
        {metrics.memoryUsage && (
          <div>Memory: {metrics.memoryUsage}MB</div>
        )}
      </div>
    </div>
  )
}

// Hook to measure component render time
export function useRenderTime(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now()
      
      return () => {
        const endTime = performance.now()
        console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`)
      }
    }
  })
}

// Bundle size analyzer helper
export function logBundleInfo() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    // Log approximate bundle size based on script tags
    const scripts = Array.from(document.querySelectorAll('script[src]'))
    console.group('Bundle Analysis')
    console.log(`Scripts loaded: ${scripts.length}`)
    
    // Estimate total bundle size (rough approximation)
    let totalEstimatedSize = 0
    scripts.forEach((script: any) => {
      if (script.src.includes('/_next/')) {
        // Rough estimation based on typical Next.js bundle sizes
        totalEstimatedSize += 200 // KB estimate per chunk
      }
    })
    
    console.log(`Estimated bundle size: ~${totalEstimatedSize}KB`)
    console.groupEnd()
  }
}