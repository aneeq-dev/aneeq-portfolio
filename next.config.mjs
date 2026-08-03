/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules", "**/.git", "**/refs"],
    };
    return config;
  },
};

export default nextConfig;
