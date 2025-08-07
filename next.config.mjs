/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iili.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cse.uap-bd.edu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.prothomalo.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better performance
  experimental: {
    // optimizeCss: true, // Temporarily disabled for build
  },
  // Redirects for old entrepreneurship routes
  async redirects() {
    return [
      {
        source: '/our-alumni-and-student-in-entrepreneurship/:path*',
        destination: '/campus-life/our-alumni-and-student-in-entrepreneurship/:path*',
        permanent: true,
      },
      {
        source: '/campus-life/entrepreneurship/:id',
        destination: '/campus-life/our-alumni-and-student-in-entrepreneurship/:id',
        permanent: true,
      },
    ]
  },
}

export default nextConfig