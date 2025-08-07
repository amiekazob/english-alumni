"use client"

import { motion } from "framer-motion"
import { useScrollAnimation, ScrollAnimationOptions } from "@/hooks/use-scroll-animation"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'custom'
  variants?: any
  delay?: number
  duration?: number
  scrollOptions?: ScrollAnimationOptions
}

const getAnimationVariants = (animation: string, delay = 0, duration = 0.6) => {
  const baseTransition = {
    duration,
    ease: "easeOut",
    delay
  }

  switch (animation) {
    case 'fadeIn':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: baseTransition }
      }
    case 'slideUp':
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: baseTransition }
      }
    case 'slideLeft':
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: baseTransition }
      }
    case 'slideRight':
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: baseTransition }
      }
    case 'scaleIn':
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: baseTransition }
      }
    default:
      return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: baseTransition }
      }
  }
}

export function AnimatedSection({
  children,
  className = "",
  animation = 'slideUp',
  variants,
  delay = 0,
  duration = 0.6,
  scrollOptions = {}
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(scrollOptions)
  
  const animationVariants = variants || getAnimationVariants(animation, delay, duration)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Specialized components for common use cases
export function FadeInSection({ children, className = "", delay = 0, scrollOptions = {} }: {
  children: ReactNode
  className?: string
  delay?: number
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <AnimatedSection 
      animation="fadeIn" 
      className={className} 
      delay={delay}
      scrollOptions={scrollOptions}
    >
      {children}
    </AnimatedSection>
  )
}

export function SlideUpSection({ children, className = "", delay = 0, scrollOptions = {} }: {
  children: ReactNode
  className?: string
  delay?: number
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <AnimatedSection 
      animation="slideUp" 
      className={className} 
      delay={delay}
      scrollOptions={scrollOptions}
    >
      {children}
    </AnimatedSection>
  )
}

export function ScaleInSection({ children, className = "", delay = 0, scrollOptions = {} }: {
  children: ReactNode
  className?: string
  delay?: number
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <AnimatedSection 
      animation="scaleIn" 
      className={className} 
      delay={delay}
      scrollOptions={scrollOptions}
    >
      {children}
    </AnimatedSection>
  )
}