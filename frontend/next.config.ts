import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/SiteWithAntigravity',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
