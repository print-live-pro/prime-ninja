/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: {
     runtime: 'experimental-edge',
   },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/_error",
        destination: "/home",
        permanent: true,
      },
    ]
  },
}
