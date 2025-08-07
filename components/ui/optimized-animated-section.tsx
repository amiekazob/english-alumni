"use client"

import React, { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptimizedAnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'none'
  delay?: number
  threshold?: number
  once?: boolean
}

// Reduced animation variants for better performance
const optimizedVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  none: {
    hidden: {},
    visible: {}
  }
}

// Optimized transition settings
const optimizedTransition = {
  duration: 0.4 // Reduced from longer durations
}

export function OptimizedAnimatedSection({
  children,
  className = "",
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  once = true
}: OptimizedAnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    amount: threshold, 
    once
  })
  const shouldReduceMotion = useReducedMotion()
  
  // Skip animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  const variants = optimizedVariants[animation]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        ...optimizedTransition,
        delay: Math.min(delay, 0.3) // Cap delay to prevent long waits
      }}
    >
      {children}
    </motion.div>
  )
}

// Simplified fade-in component
export function OptimizedFadeIn({ 
  children, 
  className = "", 
  delay = 0 
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <OptimizedAnimatedSection 
      animation="fadeIn" 
      className={className} 
      delay={delay}
    >
      {children}
    </OptimizedAnimatedSection>
  )
}

// Simplified slide-up component
export function OptimizedSlideUp({ 
  children, 
  className = "", 
  delay = 0 
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <OptimizedAnimatedSection 
      animation="slideUp" 
      className={className} 
      delay={delay}
    >
      {children}
    </OptimizedAnimatedSection>
  )
}

// Performance-optimized staggered container
export function OptimizedStaggeredContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: Math.min(staggerDelay, 0.1), // Cap stagger delay
            delayChildren: 0
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={optimizedTransition}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}