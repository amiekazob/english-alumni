"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { AnimatedSection } from "@/components/ui/animated-section"

export function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-primary-800 text-white">
      <div className="container mx-auto px-4 py-12" suppressHydrationWarning={true}>
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6" scrollOptions={{ margin: "-100px" }} suppressHydrationWarning={true}>
          {/* Brand Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center" suppressHydrationWarning={true}>
                <img src="/images/logo.png" alt="Pharmacy Alumni Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col" suppressHydrationWarning={true}>
                <span className="font-bold text-lg text-white">EEE Alumni Association</span>
                <span className="text-xs text-gray-300">Dept. of EEE - University of Asia Pacific</span>
              </div>
            </Link>
            <p className="text-sm max-w-xs text-gray-300">
              <span>
                University of Asia Pacific
              </span><br />
              <span>
                Main Campus, Level-5, 74/A
              </span> <br />
              <span>
                Green Road, Dhaka-1205
              </span> <br />
            </p>
            <div className="flex space-x-4" suppressHydrationWarning={true}>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </StaggeredItem>
    
          {/* About & Alumni Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <h3 className="font-semibold text-white">About & Alumni</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-white transition-colors">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-white transition-colors">
                  Alumni Registration
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </StaggeredItem>

          {/* News & Events Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <h3 className="font-semibold text-white">News & Events</h3>
            <ul className="space-y-2 text-sm text-gray-300">

              <li>
                <Link href="/upcoming-events" className="hover:text-white transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="hover:text-white transition-colors">
                  Past Events
                </Link>
              </li>
            </ul>
          </StaggeredItem>

          {/* Alumni Life & Gallery Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <h3 className="font-semibold text-white">Alumni Life</h3>
            <ul className="space-y-2 text-sm text-gray-300">

              <li>
                <Link href="/registration" className="hover:text-white transition-colors">
                  Join Alumni Network
                </Link>
              </li>
            </ul>
          </StaggeredItem>

          {/* Contact & Support Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <h3 className="font-semibold text-white">Contact & Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:pharmacy.alumni@uap-bd.edu" className="hover:text-white transition-colors">
                  alumni-eee@uap-bd.edu
                </a>
              </li>
              <li>
                <a href="mailto:dao.pharmacy@uap-bd.edu" className="hover:text-white transition-colors">
                  Administrative Office
                </a>
              </li>
            </ul>
          </StaggeredItem>

       

          {/* Location Map Section */}
          <StaggeredItem className="space-y-4" suppressHydrationWarning={true}>
            <h3 className="font-semibold text-white">Find Us</h3>
            <div className="space-y-2" suppressHydrationWarning={true}>
              <p className="text-sm text-gray-400">University Location</p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.906!2d90.3938!3d23.7516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087a0a6ad%3A0xc642213c20e4c478!2s74%2FA%20Green%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1703000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University of Asia Pacific Location"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyDQgAEEUYFhgeGDkYyQMyDQgBEAAYkgMYgAQYigUyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDI3MDNqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=bd&sa=X&geocode=KTuvjqmwuFU3MXjE_CQhQ5LG&daddr=74/A+Green+Rd,+Dhaka+1205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-accent-400 hover:text-accent-300 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </StaggeredItem>
        </StaggeredGrid>

        {/* Bottom Section */}
        <AnimatedSection animation="fadeIn" delay={0.5} className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" suppressHydrationWarning={true}>
            <p className="text-sm text-gray-400">
              © All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
            
                Paboya AI
              
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}