import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
    {
      hostname:"cdn.dummyjson.com"
    },
    {
      hostname:"images.unsplash.com"
    }],
  }
};



export default nextConfig;
