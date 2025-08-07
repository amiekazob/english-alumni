import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
  }, [])

  const stopAutoPlay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  React.useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return stopAutoPlay
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay])

  return {
    currentIndex,
    setCurrentIndex,
    isAutoPlaying,
    setIsAutoPlaying,
    startAutoPlay,
    stopAutoPlay
  }
}
