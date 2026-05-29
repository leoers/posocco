/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'posocco.com.br',
        pathname: '**', // Permite qualquer pasta dentro deste domínio
      },
      {
        protocol: 'https',
        hostname: 'posoccowp.xyz',
        pathname: '**', // Permite qualquer pasta dentro deste domínio
      },
    ],
  },
};

export default nextConfig;