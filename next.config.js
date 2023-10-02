/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'],
    formats: ['image/webp'],
  },
  env: {
    axiosBaseurl: process.env.AXIOS_BASEURL,
  },
}

module.exports = nextConfig
