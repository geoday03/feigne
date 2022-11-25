// @ts-check
/**
 * @type {import('next').NextConfig}
 */
export const nextConfig = {
  basePath: "/feigne",
};

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
