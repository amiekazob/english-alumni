# Social Media Sharing Testing Guide

This guide helps you test and validate social media sharing for all news articles on the UAP EEE Alumni Portal.

## Testing Tools

### Facebook Sharing Debugger
- **URL**: https://developers.facebook.com/tools/debug/
- **Purpose**: Test and refresh Facebook Open Graph metadata
- **How to use**:
  1. Visit the Facebook Sharing Debugger
  2. Enter your news article URL (e.g., `https://uappaic.netlify.app/news/eee-alumni-scholarship-fund-announcement`)
  3. Click "Debug" to see how the link will appear on Facebook
  4. Click "Scrape Again" if you've made changes to refresh the cache

### Twitter Card Validator
- **URL**: https://cards-dev.twitter.com/validator
- **Purpose**: Test Twitter Card metadata
- **How to use**:
  1. Visit the Twitter Card Validator
  2. Enter your news article URL
  3. Click "Preview card" to see how the link will appear on Twitter

### LinkedIn Post Inspector
- **URL**: https://www.linkedin.com/post-inspector/
- **Purpose**: Test LinkedIn sharing metadata
- **How to use**:
  1. Visit the LinkedIn Post Inspector
  2. Enter your news article URL
  3. Click "Inspect" to see how the link will appear on LinkedIn
  4. Use "Clear cache" if you need to refresh after making changes

## News Articles to Test

Test the following URLs:

1. **Main News Page**:
   - `https://uappaic.netlify.app/news`

2. **Individual News Articles**:
   - `https://uappaic.netlify.app/news/dr-sultan-mahmud-renewable-energy-award`
   - `https://uappaic.netlify.app/news/fahim-hasan-solargrid-innovations`
   - `https://uappaic.netlify.app/news/eee-alumni-scholarship-fund-announcement`
   - `https://uappaic.netlify.app/news/research-collaboration-smart-grid-technology`

## Expected Results

Each news article should display:
- **Title**: Article title with "| Alumni Portal - Dept of EEE, UAP" suffix
- **Description**: Article excerpt
- **Image**: Article featured image (800x400px)
- **URL**: Canonical URL of the article
- **Site Name**: "UAP EEE Alumni Portal"
- **Type**: "article" for individual articles, "website" for main news page

## Troubleshooting

### If images don't appear:
1. Check that the image file exists in `/public/images/news/`
2. Verify the image path in `lib/news-data.ts`
3. Use the "Scrape Again" or "Clear cache" options in the testing tools

### If metadata is incorrect:
1. Check the `generateMetadata` function in the page component
2. Verify environment variables are set correctly
3. Clear social media platform caches using the debugging tools

### If sharing doesn't work:
1. Ensure the site is publicly accessible
2. Check that HTTPS is enabled for production
3. Verify all meta tags are properly formatted

## Environment Variables

Make sure these environment variables are set:

```env
NEXT_PUBLIC_BASE_URL=https://uappaic.netlify.app
NEXT_PUBLIC_TWITTER_HANDLE=@uap_eee_alumni
NEXT_PUBLIC_FACEBOOK_PAGE=uap.eee.alumni
NEXT_PUBLIC_LINKEDIN_PAGE=uap-eee-alumni
```

## Meta Tags Included

Each page includes:
- Open Graph tags for Facebook
- Twitter Card tags for Twitter
- LinkedIn-compatible Open Graph tags
- Canonical URLs
- Structured data for better SEO

## Testing Checklist

- [ ] Facebook Sharing Debugger shows correct title, description, and image
- [ ] Twitter Card Validator displays proper card preview
- [ ] LinkedIn Post Inspector shows accurate link preview
- [ ] All images load correctly
- [ ] Titles and descriptions are appropriate length
- [ ] URLs are canonical and accessible
- [ ] Site name appears correctly across all platforms