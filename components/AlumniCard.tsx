'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Building, User, Linkedin, Facebook, Instagram, Globe } from 'lucide-react';
import Image from 'next/image';
import { VerificationBadge } from '@/components/ui/verification-badge';

export interface AlumniMember {
  Name: string;
  Batch: string;
  Position: string;
  Institute: string;
  Email: string;
  Photo: string;
  Point?: number;
  LinkedIn?: string;
  Facebook?: string;
  Instagram?: string;
  verified?: number;
  blue_verified?: number;
  Country?: string;
}

interface AlumniCardProps {
  alumni: AlumniMember;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 hover:border-blue-300 overflow-hidden">
      {/* Large Image at Top */}
      <div className="relative h-72 overflow-hidden bg-gray-200">
        {alumni.Photo && !imageError ? (
          <Image
            src={`/images/feature_alumni/${alumni.Batch}/${alumni.Photo}`}
            alt={alumni.Name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => {
              console.error(`Failed to load image: /images/feature_alumni/${alumni.Batch}/${alumni.Photo}`);
              setImageError(true);
            }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardContent className="px-6 pt-6 pb-4">
        {/* Name and Batch */}
        <div className="text-center mb-4">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2 flex items-center justify-center gap-2">
            {alumni.Name}
            {/* Verification Badges */}
            {alumni.blue_verified === 1 && (
              <VerificationBadge type="blue_verified" size="md" />
            )}
            {alumni.verified === 1 && alumni.blue_verified !== 1 && (
              <VerificationBadge type="verified" size="md" />
            )}
          </h3>
          <Badge variant="default" className="mb-3">
            Batch {alumni.Batch}
          </Badge>
        </div>

        {/* Professional Information */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <User className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">{alumni.Position}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Building className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">{alumni.Institute}</p>
            </div>
          </div>
          
          {alumni.Country && (
            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">{alumni.Country}</p>
              </div>
            </div>
          )}
          
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <a 
                href={`mailto:${alumni.Email}`}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors break-all"
              >
                {alumni.Email}
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center gap-4">
            {alumni.LinkedIn && (
              <a
                href={alumni.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition-all duration-200 hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {alumni.Facebook && (
              <a
                href={alumni.Facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-800 hover:text-blue-900 transition-all duration-200 hover:scale-110"
                title="Facebook Profile"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {alumni.Instagram && (
              <a
                href={alumni.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 hover:text-pink-700 transition-all duration-200 hover:scale-110"
                title="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}