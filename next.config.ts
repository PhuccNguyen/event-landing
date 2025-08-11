/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['lu.ma', 'localhost'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lu.ma',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['nodemailer', 'google-spreadsheet'],
  // Remove deprecated allowedDevOrigins
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
