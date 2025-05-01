/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Añade aquí los dominios de imágenes que uses
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  transpilePackages: ['framer-motion'],
};

export default nextConfig; 