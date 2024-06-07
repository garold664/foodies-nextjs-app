import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        pathname: '/dudevjtfp/image/upload/**',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};
export default nextConfig;
