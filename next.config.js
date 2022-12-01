/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/feigne",
  assetPrefix: "/feigne",
};

module.exports = nextConfig;
