# Hero Section Images

This folder contains images specifically for the hero section of the website.

## Usage

To import hero images in your components:

```tsx
// Example: Import hero background image
import heroBackground from '/images/hero/hero-background.jpg'

// Or use Next.js Image component
import Image from 'next/image'

<Image 
  src="/images/hero/hero-background.jpg" 
  alt="EEE Department Hero Background"
  width={1920}
  height={1080}
  priority
/>
```

## Image Guidelines

### Hero Background Images
- **Recommended size**: 1920x1080px (Full HD) or higher
- **Aspect ratio**: 16:9 for optimal display
- **Format**: JPG for photos, PNG for graphics with transparency
- **Optimization**: Compress images for web (aim for <500KB)
- **Quality**: High quality since these are prominent display images

### Hero Overlay Images
- **Size**: Variable based on design needs
- **Format**: PNG with transparency for overlays
- **SVG**: Preferred for icons and simple graphics

## File Naming Convention

- `hero-background.jpg` - Main hero background image
- `hero-background-mobile.jpg` - Mobile-optimized version
- `hero-overlay-*.png` - Overlay graphics
- `hero-icon-*.svg` - Hero section icons
- `hero-logo.svg` - Department logo for hero

## Performance Considerations

- Use `priority` prop for hero images in Next.js Image component
- Consider WebP format for better compression
- Provide multiple sizes for responsive design
- Use lazy loading for non-critical hero elements

## Examples

- `hero-background.jpg` - Main background image
- `hero-background-dark.jpg` - Dark theme variant
- `hero-overlay-pattern.png` - Decorative overlay
- `hero-department-logo.svg` - EEE department logo
- `hero-university-seal.png` - University seal/emblem