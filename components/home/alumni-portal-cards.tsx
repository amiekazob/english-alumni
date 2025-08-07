"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Facebook, Instagram, Building, User, GraduationCap } from 'lucide-react'
import { alumniData, getAllBatches, getAlumniByBatch, type AlumniMember } from '@/lib/alumni-data'
import { cn } from '@/lib/utils'

interface AlumniCardProps {
  alumni: AlumniMember
}

function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 hover:border-blue-300 overflow-hidden">
      {/* Large Image at Top */}
      <div className="relative h-48 overflow-hidden">
        {alumni.image ? (
          <img 
            src={alumni.image} 
            alt={alumni.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-white/30">
              {alumni.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardContent className="p-6">
        {/* Name and Batch */}
        <div className="text-center mb-4">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {alumni.name}
          </h3>
          <Badge variant="secondary" className="mb-3">
            Batch {alumni.batch}
          </Badge>
        </div>

        {/* Position and Institute */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2">
            <User className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">{alumni.position}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Building className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-600">{alumni.institute}</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
          <Mail className="w-4 h-4 text-gray-500" />
          <a 
            href={`mailto:${alumni.email}`}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors truncate"
          >
            {alumni.email}
          </a>
        </div>

        {/* Social Media Links */}
        {alumni.socialMedia && (
          <div className="border-t pt-4">
            <p className="text-sm font-medium text-gray-700 mb-3">Connect with me:</p>
            <div className="flex gap-2">
              {alumni.socialMedia.linkedin && (
                <a
                  href={alumni.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors transform hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {alumni.socialMedia.facebook && (
                <a
                  href={alumni.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors transform hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {alumni.socialMedia.instagram && (
                <a
                  href={alumni.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors transform hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function AlumniPortalCards() {
  const [selectedBatch, setSelectedBatch] = useState<string>('all')
  const batches = getAllBatches()
  
  const filteredAlumni = selectedBatch === 'all' 
    ? alumniData 
    : getAlumniByBatch(selectedBatch)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Alumni Portal</h2>
            <GraduationCap className="w-12 h-12 text-blue-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with our distinguished alumni who are making their mark across various industries worldwide.
          </p>
          
          {/* Batch Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedBatch === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedBatch('all')}
              className={cn(
                "transition-all duration-200",
                selectedBatch === 'all' && "bg-blue-600 hover:bg-blue-700"
              )}
            >
              All Batches
            </Button>
            {batches.map((batch) => (
              <Button
                key={batch}
                variant={selectedBatch === batch ? 'default' : 'outline'}
                onClick={() => setSelectedBatch(batch)}
                className={cn(
                  "transition-all duration-200",
                  selectedBatch === batch && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                Batch {batch}
              </Button>
            ))}
          </div>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-700">
              Showing {filteredAlumni.length} alumni
              {selectedBatch !== 'all' && ` from Batch ${selectedBatch}`}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}