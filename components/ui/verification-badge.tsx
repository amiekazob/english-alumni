import React from 'react';

interface VerificationBadgeProps {
  type: 'verified' | 'blue_verified';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function VerificationBadge({ type, size = 'md', className = '' }: VerificationBadgeProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  const iconSizes = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-5 h-5'
  };
  
  const baseClasses = `${sizeClasses[size]} rounded-full flex items-center justify-center border-2 border-white shadow-lg relative ${className}`;
  
  if (type === 'blue_verified') {
    return (
      <div 
        className={`${baseClasses} bg-blue-500 hover:bg-blue-600 transition-colors`}
        title="Blue Verified - Distinguished Alumni"
      >
        {/* Facebook-style checkmark */}
        <svg className={`${iconSizes[size]} text-white relative z-10`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        {/* Facebook-like gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80" />
      </div>
    );
  }
  
  if (type === 'verified') {
    return (
      <div 
        className={`${baseClasses} bg-gray-600 hover:bg-gray-700 transition-colors`}
        title="Verified Alumni"
      >
        {/* White/Gray checkmark */}
        <svg className={`${iconSizes[size]} text-white relative z-10`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 opacity-80" />
      </div>
    );
  }
  
  return null;
}

export default VerificationBadge;