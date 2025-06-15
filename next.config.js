// next.config.js
/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = 'my-lair';

const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

module.exports = nextConfig;
