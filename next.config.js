/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites(){
    return[
      {
        source: "/public/index.html",
        destination: "/pages/api/print-connect.js",
      }
    ]
  }
}

module.exports = nextConfig
