import React from 'react';
import { ExternalLink } from 'lucide-react';
// Academic profile type definition
type AcademicProfile = {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone?: string;
  office?: string;
  researchInterests?: string[];
  education?: string[];
  publications?: string[];
  image?: string;
  platform?: string;
  url?: string;
};

interface AcademicProfileIconsProps {
  profiles: AcademicProfile[];
  className?: string;
}

const platformIcons: Record<string, { icon: React.ReactNode; color: string; name: string }> = {
  'Google Scholar': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
      </svg>
    ),
    color: 'text-blue-600 hover:text-blue-700',
    name: 'Google Scholar'
  },
  'ResearchGate': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zM8.063 18.411H5.5V9.6h2.563v8.811zm-1.282-10.02c-.821 0-1.487-.666-1.487-1.487s.666-1.487 1.487-1.487 1.487.666 1.487 1.487-.666 1.487-1.487 1.487zm11.719 10.02h-2.563v-4.284c0-.958-.017-2.19-1.334-2.19-1.335 0-1.54 1.042-1.54 2.119v4.355h-2.563V9.6h2.462v1.205h.035c.343-.649 1.18-1.334 2.428-1.334 2.594 0 3.075 1.707 3.075 3.926v5.014z"/>
      </svg>
    ),
    color: 'text-green-600 hover:text-green-700',
    name: 'ResearchGate'
  },
  'ORCID': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.781-1.444 3.781-3.722 0-2.016-1.3-3.722-3.781-3.722h-2.297z"/>
      </svg>
    ),
    color: 'text-green-500 hover:text-green-600',
    name: 'ORCID'
  },
  'Academia.edu': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 2.432l8.659 4.992v9.144L12 21.568l-7.586-5-8.659-4.992V7.424l8.659-4.992L12 2.432z"/>
      </svg>
    ),
    color: 'text-blue-800 hover:text-blue-900',
    name: 'Academia.edu'
  },
  'LinkedIn': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'text-blue-700 hover:text-blue-800',
    name: 'LinkedIn'
  },
  'IEEE Xplore': {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: 'text-indigo-600 hover:text-indigo-700',
    name: 'IEEE Xplore'
  }
};

export function AcademicProfileIcons({ profiles, className = '' }: AcademicProfileIconsProps) {
  if (!profiles || profiles.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {profiles.map((profile, index) => {
        const platformData = profile.platform ? platformIcons[profile.platform] : null;
        
        if (!platformData) {
          return (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
              title={`View ${profile.platform} profile`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>{profile.platform}</span>
            </a>
          );
        }

        return (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-sm ${platformData.color}`}
            title={`View ${platformData.name} profile`}
          >
            {platformData.icon}
            <span className="text-sm font-medium">{platformData.name}</span>
          </a>
        );
      })}
    </div>
  );
}

// Compact version for smaller spaces
export function AcademicProfileIconsCompact({ profiles, className = '' }: AcademicProfileIconsProps) {
  if (!profiles || profiles.length === 0) {
    return null;
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {profiles.map((profile, index) => {
        const platformData = profile.platform ? platformIcons[profile.platform] : null;
        
        if (!platformData) {
          return (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-200"
              title={`View ${profile.platform} profile`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          );
        }

        return (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full hover:bg-gray-100 transition-all duration-200 ${platformData.color}`}
            title={`View ${platformData.name} profile`}
          >
            {platformData.icon}
          </a>
        );
      })}
    </div>
  );
}

export default AcademicProfileIcons;