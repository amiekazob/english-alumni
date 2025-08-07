'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Users, 
  Award, 
  Briefcase, 
  PenTool, 
  Camera,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { StaggeredGrid, StaggeredItem } from '@/components/ui/staggered-container'

import { committeeMembers as committeeData, CommitteeMember } from '@/lib/committee-data'

const getPositionIcon = (position: string) => {
  switch (position.toLowerCase()) {
    case 'convener':
      return <Award className="w-6 h-6 text-indigo-600" />;
    case 'president':
      return <Users className="w-6 h-6 text-indigo-600" />;
    case 'general secretary':
      return <PenTool className="w-6 h-6 text-indigo-600" />;
    case 'treasurer':
      return <Briefcase className="w-6 h-6 text-indigo-600" />;
    case 'organising secretary':
      return <Users className="w-6 h-6 text-indigo-600" />;
    case 'mentorship panel':
      return <Award className="w-6 h-6 text-indigo-600" />;
    case 'technical lead':
      return <PenTool className="w-6 h-6 text-indigo-600" />;
    case 'graphics & media':
      return <Camera className="w-6 h-6 text-indigo-600" />;
    default:
      return <Users className="w-6 h-6 text-indigo-600" />;
  }
};

const CommitteeCard = ({ member }: { member: CommitteeMember }) => {
  return (
    <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient Header */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" />
      
      <CardContent className="relative p-6 pt-16">
        {/* Profile Image */}
        <div className="relative mx-auto w-64 h-64 -mt-8 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
            <Image
              src={member.image}
              alt={member.name}
              width={256}
              height={256}
              className="w-full h-full object-cover rounded-full bg-white"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
        </div>

        {/* Name and Position */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0">
            {member.position}
          </Badge>
        </div>

        {/* Contact Info */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-blue-600" />
            <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
              {member.email}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 pt-3 border-t border-gray-100">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
};

const CommitteeSection = ({ position, members }: { position: string; members: CommitteeMember[] }) => {
  const bgColors = [
    'from-blue-50 to-indigo-100',
    'from-purple-50 to-pink-100', 
    'from-green-50 to-emerald-100',
    'from-yellow-50 to-orange-100',
    'from-red-50 to-rose-100',
    'from-gray-50 to-slate-100'
  ]
  
  const colorIndex = position.length % bgColors.length
  
  return (
    <AnimatedSection className={`py-16 bg-gradient-to-br ${bgColors[colorIndex]} relative overflow-hidden mb-8`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {position}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <StaggeredGrid>
          {members.map((member, index) => (
            <StaggeredItem key={member.id} index={index}>
              <CommitteeCard member={member} />
            </StaggeredItem>
          ))}
        </StaggeredGrid>
      </div>
    </AnimatedSection>
  )
};

export default function CommitteePage() {
  const positionOrder = [
    'Convener',
    'President',
    'General Secretary',
    'Treasurer',
    'Organising Secretary',
    'Mentorship Panel',
    'Technical Lead',
    'Graphics & Media'
  ]

  // Group members by position
  const groupedMembers = positionOrder.reduce((acc, position) => {
    const members = committeeData.filter(member => member.position === position)
    if (members.length > 0) {
      acc[position] = members
    }
    return acc
  }, {} as Record<string, CommitteeMember[]>)

  const totalMembers = committeeData.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our Committee
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive our department's vision forward
            </p>
            
            {/* Statistics */}
            <div className="flex justify-center mt-12">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white">{totalMembers}</div>
                <div className="text-blue-200">Committee Members</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Committee Sections */}
      <div className="container mx-auto px-4 py-16">
        {Object.entries(groupedMembers).map(([position, members]) => (
          <CommitteeSection key={position} position={position} members={members} />
        ))}
      </div>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in becoming part of our dynamic team? We're always looking for passionate individuals to contribute to our department's growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/news"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Latest Updates
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}