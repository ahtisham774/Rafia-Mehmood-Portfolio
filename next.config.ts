import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(PNG|png|JPG|jpe?g|GIF|gif|WEBP|webp|SVG|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[hash][ext][query]'
      }
    });
    return config;
  },
};

export default nextConfig;
