// next.config.js ou next.config.ts (se estiver usando TypeScript)

import dotenv from 'dotenv';
import type { NextConfig } from 'next';

// Carrega as variáveis do .env.local ou .env.production
dotenv.config();

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3525';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/chat/:path*',
        destination: `${apiUrl}/chat/:path*`,
      },
      {
        source: '/u/:path*',
        destination: `${apiUrl}/u/:path*`,
      }
    ];
  }
};

export default nextConfig;
