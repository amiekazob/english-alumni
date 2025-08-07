# Images Directory

This directory contains all images used throughout the EEE UAP website, organized by category for better maintainability and easier imports.

## Directory Structure

```
images/
├── hero/                   # Hero section images
│   └── README.md          # Hero images documentation
├── lab/                    # Laboratory and equipment images
│   └── README.md          # Lab images documentation
└── news-events/           # News, events, and announcements
    ├── README.md          # News & events documentation
    ├── conferences/       # Conference images
    ├── workshops/         # Workshop images
    ├── seminars/          # Seminar images
    ├── achievements/      # Awards and achievements
    ├── announcements/     # General announcements
    ├── general-news/      # General news images
    ├── tectron-2025/      # Individual news: UAP Hosted TechTron 2025
    ├── eee-participate-bitfest-2025/  # Individual news: EEE team at KUET Bitfest 2.0
    └── IEEE-WIE-2024/     # Individual news: UAP EEE Team Became Champion
```

## Usage Guidelines

### Importing Images in Next.js

```tsx
// Static import (recommended for build-time optimization)
import labImage from '/images/lab/equipment-name.jpg'

// Dynamic import using Next.js Image component
import Image from 'next/image'

<Image 
  src="/images/lab/equipment-name.jpg" 
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
/>
```

### File Naming Conventions

- Use **kebab-case** for file names: `power-systems-lab.jpg`
- Include **descriptive keywords**: `electronics-lab-overview.jpg`
- Add **dates for events**: `ieee-conference-2024-03-15.jpg`
- Use **consistent prefixes** for related images

### Supported Formats

- **JPEG** (`.jpg`, `.jpeg`) - For photographs
- **PNG** (`.png`) - For images with transparency
- **WebP** (`.webp`) - For optimized web images
- **SVG** (`.svg`) - For vector graphics and icons

### Image Optimization Tips

1. **Compress images** before uploading
2. **Use appropriate dimensions** (max 1920px width for most cases)
3. **Choose the right format** based on content type
4. **Add descriptive alt text** for accessibility
5. **Use Next.js Image component** for automatic optimization

## Adding New Categories

To add a new image category:

1. Create a new folder: `mkdir public/images/new-category`
2. Add a README.md with usage instructions
3. Update this main README.md
4. Follow the established naming conventions

## Best Practices

- Keep images under 500KB when possible
- Use descriptive file names
- Organize by logical categories
- Document new additions
- Test image loading in development
- Ensure proper alt text for accessibility