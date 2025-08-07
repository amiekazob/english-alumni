"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AlumniPortal() {
  return (
    <section id="alumni-portal-section" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Check Our Latest</h2>
            <GraduationCap className="w-12 h-12 text-blue-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay connected with our alumni community and discover the latest news, updates, and success stories from our graduates.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="https://alumni-eee.uap-bd.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                size="lg" 
                className={cn(
                  "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                  "text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg",
                  "transform transition-all duration-300 ease-in-out",
                  "hover:scale-105 hover:shadow-2xl",
                  "active:scale-95",
                  "border-2 border-transparent hover:border-blue-300",
                  "relative overflow-hidden"
                )}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                
                <div className="relative flex items-center gap-3">
                  <Users className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="transition-all duration-300 group-hover:tracking-wide">
                    Alumni Portal
                  </span>
                  <ExternalLink className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
          </div>
        </div>
      </div>
    </section>
  )
}