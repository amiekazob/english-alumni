"use client"

import * as React from "react"
import Link from "next/link"
import { LoadingLink } from "@/components/ui/loading-link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    activities: false,
    events: false
  })

  const toggleMobileDropdown = (dropdown: 'about' | 'activities' | 'events') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  // Close dropdowns and mobile menu when navigating to a new page
  useEffect(() => {
    setOpenDropdown(null)
    setIsMobileMenuOpen(false)
  }, [pathname])


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-primary-100">
        <div className="container mx-auto px-4" suppressHydrationWarning={true}>
          <div className="flex h-20 items-center justify-between" suppressHydrationWarning={true}>
            {/* Logo and Portal Name */}
            <LoadingLink href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center" suppressHydrationWarning={true}>
                <img src="/images/logo.png" alt="University of Asia Pacific Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col" suppressHydrationWarning={true}>
                <span className="text-lg font-bold text-gray-900">Alumni Portal</span>
                <span className="text-sm text-gray-600">Dept of Pharmacy, University of Asia Pacific</span>
              </div>
            </LoadingLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <LoadingLink
                href="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-primary-50 hover:text-primary-600",
                   pathname === '/' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                )}
              >
                Home
              </LoadingLink>

              {/* About Us */}
              <LoadingLink
                href="/about-us"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-primary-50 hover:text-primary-600",
                   pathname === '/about-us' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                )}
              >
                About Us
              </LoadingLink>

              {/* Message from Head */}
              <LoadingLink
                href="/message-from-head"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-primary-50 hover:text-primary-600",
                   pathname === '/message-from-head' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                )}
              >
                Message from Head
              </LoadingLink>

               {/* Alumni */}
               <LoadingLink
                 href="/alumni"
                 className={cn(
                     "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                     "hover:bg-primary-50 hover:text-primary-600",
                     pathname === '/alumni' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                   )}
               >
                 All Alumni
               </LoadingLink>

              {/* News */}
              <LoadingLink
                href="/news"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-primary-50 hover:text-primary-600",
                   pathname === '/news' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                )}
              >
                News
              </LoadingLink>










              {/* Events */}
              <div className="relative group" suppressHydrationWarning={true}>
                <button
                  className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                      "hover:bg-primary-50 hover:text-primary-600",
                      openDropdown === 'events' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                    )}
                  onClick={() => toggleDropdown('events')}
                >
                  <span>Events</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === 'events' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <LoadingLink href="/upcoming-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Upcoming Events
                      </LoadingLink>
                      <LoadingLink href="/past-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Past Events
                      </LoadingLink>
                    </div>
                  </div>
                )}
              </div>


              {/* Gallery */}
              <LoadingLink
                href="/gallery"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-primary-50 hover:text-primary-600",
                   pathname === '/gallery' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                )}
              >
                Gallery
              </LoadingLink>

               {/* Registration */}
               <LoadingLink
                 href="/registration"
                 className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "hover:bg-primary-50 hover:text-primary-600",
                    pathname === '/registration' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  )}
               >
                 Registration
               </LoadingLink>



              {/* More */}
              <div className="relative group" suppressHydrationWarning={true}>
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                    "hover:bg-orange-50 hover:text-orange-600",
                    openDropdown === 'more' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                  )}
                  onClick={() => toggleDropdown('more')}
                >
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'more' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <LoadingLink href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact Us</LoadingLink>
                    </div>
                  </div>
                )}
              </div>
            </nav>



            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:text-primary-600 hover:bg-primary-50"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">


                <LoadingLink href="/" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">Home</LoadingLink>
                
                <LoadingLink href="/about-us" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">About Us</LoadingLink>
                
                <LoadingLink href="/message-from-head" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">Message from Head</LoadingLink>
                
                <LoadingLink href="/news" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">News</LoadingLink>
                
                <LoadingLink href="/gallery" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">Gallery</LoadingLink>


                

                

                

                
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-events')}
                  >
                    <span>Events</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-events' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-events' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <LoadingLink href="/upcoming-events" className="block py-1 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded px-2 transition-colors">Upcoming Events</LoadingLink>
                      <LoadingLink href="/past-events" className="block py-1 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded px-2 transition-colors">Past Events</LoadingLink>
                    </div>
                  )}
                </div>
                


                <LoadingLink href="/alumni" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">Alumni</LoadingLink>

                <LoadingLink href="/registration" className="block py-2 font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md px-3 transition-colors">Registration</LoadingLink>



                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-more')}
                  >
                    <span>More</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-more' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-more' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <LoadingLink href="/contact-us" className="block py-1 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded px-2 transition-colors">Contact Us</LoadingLink>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}
      </header>



      {/* Overlay for closing dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
    </>
  )
}