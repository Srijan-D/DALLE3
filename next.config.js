/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["seeklogo.com", "aiimagegenerator39c2f88.blob.core.windows.net","imagegenerator264ec19.blob.core.windows.net"],
    unoptimized: true,
  }
}

module.exports = nextConfig

