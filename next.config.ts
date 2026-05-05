/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'posocco.com.br',
      },
    ],
  },
};

export default nextConfig;