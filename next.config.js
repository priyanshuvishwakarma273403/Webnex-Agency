/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
  },
  generateBuildId: async () => {
    return 'v-' + Date.now();
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
