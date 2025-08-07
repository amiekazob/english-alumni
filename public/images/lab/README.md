# Lab Images

This folder contains images for laboratory facilities and equipment.

## Usage

To import lab images in your components:

```tsx
// Example: Import lab equipment image
import labImage from '/images/lab/equipment-name.jpg'

// Or use Next.js Image component
import Image from 'next/image'

<Image 
  src="/images/lab/equipment-name.jpg" 
  alt="Lab Equipment Description"
  width={800}
  height={600}
/>
```

## File Naming Convention

- Use descriptive names: `power-systems-lab.jpg`
- Use kebab-case for multi-word names
- Include lab type or equipment name
- Supported formats: `.jpg`, `.png`, `.webp`, `.svg`

## Examples

- `electronics-lab-overview.jpg`
- `microprocessor-lab-equipment.png`
- `power-systems-testing-setup.jpg`
- `communication-lab-instruments.jpg`