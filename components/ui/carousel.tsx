"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}

export function Carousel({
  children,
  className,
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = true
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(autoPlay)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const totalSlides = children.length

  const startAutoPlay = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }, interval)
  }, [interval, totalSlides])

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides)
  }

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsAutoPlaying(false)
    }
  }

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsAutoPlaying(true)
    }
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 border-0 shadow-md"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 border-0 shadow-md"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Export individual carousel components for more flexibility
export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-hidden", className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn(
      "absolute h-8 w-8 rounded-full",
      "left-12 top-1/2 -translate-y-1/2",
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </Button>
))
CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn(
      "absolute h-8 w-8 rounded-full",
      "right-12 top-1/2 -translate-y-1/2",
      className
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
))
CarouselNext.displayName = "CarouselNext"