/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["seeklogo.com"]
  }
}

module.exports = nextConfig

