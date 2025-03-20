import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net", 
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", 
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", 
      },
      {
        protocol: "https",
        hostname: "polyglotclub.com", 
      },

   
    ],
  },
};

export default nextConfig;
