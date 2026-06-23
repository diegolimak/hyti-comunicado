import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hity',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
