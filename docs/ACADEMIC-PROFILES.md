# Academic Profile Icons Documentation

This document explains how to use the academic profile icons feature for faculty members.

## Overview

The academic profile icons feature allows faculty members to showcase their professional academic profiles on various platforms like Google Scholar, ResearchGate, ORCID, etc.

## Supported Platforms

- **Google Scholar** - Academic search engine and citation database
- **ResearchGate** - Social networking site for scientists and researchers
- **ORCID** - Open Researcher and Contributor ID
- **Academia.edu** - Academic social networking platform
- **LinkedIn** - Professional networking platform
- **IEEE Xplore** - Digital library for IEEE publications

## Data Structure

### AcademicProfile Interface

```typescript
export interface AcademicProfile {
  platform: 'Google Scholar' | 'ResearchGate' | 'ORCID' | 'Academia.edu' | 'LinkedIn' | 'IEEE Xplore';
  url: string;
  profileId?: string; // Optional: for future API integrations
}
```

### Faculty Member Integration

The `FacultyMember` interface now includes an optional `academicProfiles` field:

```typescript
export interface FacultyMember {
  // ... other fields
  academicProfiles?: AcademicProfile[];
}
```

## Usage Examples

### Adding Academic Profiles to Faculty Data

```typescript
{
  id: "prof-john-doe",
  name: "Prof. John Doe",
  // ... other faculty data
  academicProfiles: [
    {
      platform: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=ABC123XYZ',
      profileId: 'ABC123XYZ'
    },
    {
      platform: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/John-Doe-2'
    },
    {
      platform: 'ORCID',
      url: 'https://orcid.org/0000-0000-0000-0000'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prof-john-doe'
    }
  ]
}
```

### Using the Components

#### Full Academic Profile Icons

```tsx
import { AcademicProfileIcons } from '@/components/ui/academic-profile-icons';

// In your faculty profile component
<AcademicProfileIcons 
  profiles={faculty.academicProfiles} 
  className="mt-4"
/>
```

#### Compact Version

```tsx
import { AcademicProfileIconsCompact } from '@/components/ui/academic-profile-icons';

// For smaller spaces like faculty cards
<AcademicProfileIconsCompact 
  profiles={faculty.academicProfiles} 
  className="mt-2"
/>
```

## Component Features

### AcademicProfileIcons (Full Version)
- Displays platform icons with labels
- Hover effects with color changes
- Responsive design
- Accessibility features (proper titles and ARIA labels)

### AcademicProfileIconsCompact (Compact Version)
- Icon-only display for space-constrained areas
- Circular hover effects
- Tooltip support
- Perfect for faculty cards or sidebar displays

## Platform-Specific Guidelines

### Google Scholar
- **URL Format**: `https://scholar.google.com/citations?user=USER_ID`
- **How to find**: Go to your Google Scholar profile, copy the URL
- **Profile ID**: The `user` parameter in the URL

### ResearchGate
- **URL Format**: `https://www.researchgate.net/profile/Your-Name`
- **How to find**: Go to your ResearchGate profile, copy the URL

### ORCID
- **URL Format**: `https://orcid.org/0000-0000-0000-0000`
- **How to find**: Your 16-digit ORCID identifier
- **Format**: Always 16 digits in groups of 4, separated by hyphens

### Academia.edu
- **URL Format**: `https://university.academia.edu/YourName`
- **How to find**: Go to your Academia.edu profile, copy the URL

### LinkedIn
- **URL Format**: `https://www.linkedin.com/in/your-profile-name`
- **How to find**: Go to your LinkedIn profile, copy the URL

### IEEE Xplore
- **URL Format**: `https://ieeexplore.ieee.org/author/AUTHOR_ID`
- **How to find**: Search for your publications on IEEE Xplore, go to your author page

## Styling and Customization

### Default Styling
- Each platform has its own brand color
- Hover effects for better user interaction
- Responsive design that works on all screen sizes

### Custom Styling
You can override the default styling by passing custom CSS classes:

```tsx
<AcademicProfileIcons 
  profiles={faculty.academicProfiles}
  className="custom-spacing custom-colors"
/>
```

## Best Practices

1. **Verify URLs**: Always test the URLs before adding them to ensure they work correctly
2. **Keep Updated**: Regularly update profile URLs if they change
3. **Privacy**: Only include profiles that faculty members want to be public
4. **Consistency**: Use the same format for similar faculty members
5. **Accessibility**: The components include proper ARIA labels and titles

## Integration with Faculty Pages

### Faculty Detail Page
Add the full version to individual faculty profile pages:

```tsx
// In app/faculty/[id]/page.tsx
{faculty.academicProfiles && (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-3">Academic Profiles</h3>
    <AcademicProfileIcons profiles={faculty.academicProfiles} />
  </div>
)}
```

### Faculty Cards
Use the compact version in faculty listing cards:

```tsx
// In faculty card components
{faculty.academicProfiles && (
  <AcademicProfileIconsCompact 
    profiles={faculty.academicProfiles}
    className="mt-2"
  />
)}
```

## Future Enhancements

1. **API Integration**: Use the `profileId` field for future API integrations
2. **Citation Counts**: Display citation counts from Google Scholar
3. **Publication Metrics**: Show publication metrics from various platforms
4. **Social Features**: Add sharing capabilities
5. **Analytics**: Track clicks on academic profile links

## Troubleshooting

### Common Issues

1. **Icons not displaying**: Check if the platform name matches exactly
2. **Links not working**: Verify the URL format is correct
3. **Styling issues**: Ensure Tailwind CSS classes are available

### Platform-Specific Issues

- **Google Scholar**: Make sure the profile is public
- **ORCID**: Verify the 16-digit format is correct
- **ResearchGate**: Ensure the profile URL is the public version

## Support

For technical support or feature requests, please contact the development team or create an issue in the project repository.