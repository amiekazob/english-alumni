"use client"

import { motion } from "framer-motion"
import { useScrollAnimation, ScrollAnimationOptions } from "@/hooks/use-scroll-animation"
import { ReactNode } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
  scrollOptions?: ScrollAnimationOptions
  suppressHydrationWarning?: boolean
}

interface StaggeredItemProps {
  children: ReactNode
  className?: string
  index?: number
  suppressHydrationWarning?: boolean
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0.1,
  scrollOptions = {},
  suppressHydrationWarning
}: StaggeredContainerProps) {
  const { ref, isInView } = useScrollAnimation(scrollOptions)
  
  const customContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customContainerVariants}
      className={className}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ children, className = "", index, suppressHydrationWarning }: StaggeredItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </motion.div>
  )
}

// Specialized staggered components
export function StaggeredGrid({ children, className = "", scrollOptions = {}, suppressHydrationWarning }: {
  children: ReactNode
  className?: string
  scrollOptions?: ScrollAnimationOptions
  suppressHydrationWarning?: boolean
}) {
  return (
    <StaggeredContainer 
      className={className}
      staggerDelay={0.1}
      childDelay={0.2}
      scrollOptions={scrollOptions}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </StaggeredContainer>
  )
}

export function StaggeredList({ children, className = "", scrollOptions = {} }: {
  children: ReactNode
  className?: string
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <StaggeredContainer 
      className={className}
      staggerDelay={0.15}
      childDelay={0.1}
      scrollOptions={scrollOptions}
    >
      {children}
    </StaggeredContainer>
  )
}