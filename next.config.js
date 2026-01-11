/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Otimizações de performance
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
