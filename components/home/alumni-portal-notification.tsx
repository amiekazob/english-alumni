"use client"

import React, { useState, useEffect } from 'react'
import { X, Users, ArrowRight, Sparkles, MousePointer } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AlumniPortalNotificationProps {
  onClose?: () => void
}

export function AlumniPortalNotification({ onClose }: AlumniPortalNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const alumniSection = document.getElementById('alumni-portal-section')
      if (alumniSection) {
        const rect = alumniSection.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0
        
        if (isInView && !isVisible) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 300)
  }

  const handlePopupClick = () => {
    // Scroll to alumni section when popup is clicked
    const alumniSection = document.getElementById('alumni-portal-section')
    if (alumniSection) {
      alumniSection.scrollIntoView({ behavior: 'smooth' })
    }
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out",
      isClosing ? "translate-y-full opacity-0 scale-95" : "translate-y-0 opacity-100 scale-100"
    )}>
      {/* Speech bubble style popup */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl border-4 border-indigo-200 p-6 max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={handlePopupClick}
      >
        {/* Close button */}
        <button
          onClick={(e) => handleClose(e)}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-10"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
        
        {/* Animated pointer */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-indigo-200"></div>
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-white absolute top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MousePointer className="w-6 h-6 text-indigo-600 animate-bounce" />
            <h3 className="text-xl font-bold text-gray-800">Click Here!</h3>
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          
          <p className="text-gray-600 mb-4 text-sm">
            🎓 Explore our <span className="font-bold text-indigo-600">Alumni Portal</span> and discover amazing success stories!
          </p>
          
          <div className="flex items-center justify-center gap-2 text-indigo-600">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Connect with Graduates</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-xl animate-pulse"></div>
    </div>
  )
}

export default AlumniPortalNotification