//import type { NextConfig } from 'next'

const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'pbs.twimg.com',

      }
    ]
  }
}

export default nextConfig
