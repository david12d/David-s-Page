import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Empty turbopack config to silence the warning
  // Contentlayer uses webpack plugin, but Turbopack handles MDX natively
  turbopack: {},
};

export default withContentlayer(nextConfig);
