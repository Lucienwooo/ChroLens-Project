/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ChroLens-Project',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
