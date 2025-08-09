'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Building2, Mail, Linkedin, Facebook, Instagram, Globe } from 'lucide-react';
import { VerificationBadge } from '@/components/ui/verification-badge';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedAlumniMember {
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

function FeaturedAlumniCard({ alumni }: { alumni: FeaturedAlumniMember }) {
  const imagePath = `/images/feature_alumni/${alumni.Batch}/${alumni.Photo}`;
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
      {/* Profile Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-indigo-100">
          <Image
            src={imagePath}
            alt={alumni.Name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-user.jpg';
            }}
          />
        </div>
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
            <Building2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
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
            <Mail className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
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

        {/* Social Media Links */}
        {(alumni.LinkedIn || alumni.Facebook || alumni.Instagram) && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-center gap-4">
              {alumni.LinkedIn && (
                <Link 
                  href={alumni.LinkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
              {alumni.Facebook && (
                <Link 
                  href={alumni.Facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              )}
              {alumni.Instagram && (
                <Link 
                  href={alumni.Instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function FeaturedAlumniPage() {
  const [featuredAlumni, setFeaturedAlumni] = useState<FeaturedAlumniMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedAlumni = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/featured-alumni');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setFeaturedAlumni(result.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching featured alumni:', err);
        setError(err instanceof Error ? err.message : 'Failed to load featured alumni');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedAlumni();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Alumni
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our most distinguished graduates who have made exceptional contributions to their fields
            </p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Alumni
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our most distinguished graduates who have made exceptional contributions to their fields
            </p>
          </div>
          
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">Error loading featured alumni: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Alumni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Celebrating our most distinguished graduates who have made exceptional contributions to their fields
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>Total Featured Alumni: {featuredAlumni.length}</span>
            <span>•</span>
            <span>Sorted by Achievement Points</span>
          </div>
        </div>

        {/* Featured Alumni Grid */}
        {featuredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredAlumni.map((alumni, index) => (
              <FeaturedAlumniCard key={index} alumni={alumni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No featured alumni found.</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Featured alumni are selected based on their outstanding achievements and contributions to their respective fields.
          </p>
        </div>
      </div>
    </div>
  );
}