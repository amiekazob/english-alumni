# Deployment Guide for Pharmacy Alumni Portal

This guide will help you deploy the Pharmacy Alumni Portal to Netlify.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Netlify account
- Gmail account (for contact form functionality)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Gmail credentials (see Email Configuration section)

4. Run the development server:
   ```bash
   npm run dev
   ```

## Email Configuration

The contact form requires Gmail SMTP configuration:

1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account Settings > Security > 2-Step Verification > App passwords
3. Generate a new app password for "Mail"
4. Use the generated 16-character password in your environment variables

## Netlify Deployment

### Method 1: Git Integration (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify:
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose your Git provider and repository

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

4. Set environment variables in Netlify:
   - Go to Site settings > Environment variables
   - Add the following variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password

### Method 2: Manual Deploy

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify:
   - Go to Netlify dashboard
   - Drag and drop the `.next` folder
   - Or use Netlify CLI: `netlify deploy --prod --dir=.next`

3. Set environment variables as described above

## Configuration Files

The project includes the following configuration files for deployment:

- `netlify.toml`: Netlify-specific configuration
- `next.config.mjs`: Next.js configuration with image optimization and redirects
- `package.json`: Build scripts and dependencies

## Features

- ✅ Static site generation (SSG) for optimal performance
- ✅ Image optimization with multiple formats (WebP, AVIF)
- ✅ SEO optimization with metadata and sitemaps
- ✅ Contact form with email functionality
- ✅ Alumni data management with Excel file support
- ✅ Responsive design for all devices
- ✅ Performance optimizations for fast loading

## Troubleshooting

### Build Issues

- Ensure Node.js version is 18 or higher
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Contact Form Issues

- Verify Gmail app password is correctly set
- Check that 2-factor authentication is enabled
- Ensure environment variables are set in Netlify dashboard

### Image Loading Issues

- Verify image paths are correct
- Check that images exist in the `public/images` directory
- Ensure image optimization settings in `next.config.mjs` are correct

## Support

For deployment issues or questions, please check:

1. Netlify documentation: https://docs.netlify.com/
2. Next.js deployment guide: https://nextjs.org/docs/deployment
3. Project repository issues section

## Security Notes

- Never commit `.env.local` or actual environment variables to version control
- Use strong, unique passwords for email configuration
- Regularly update dependencies for security patches
- Monitor Netlify logs for any security issues