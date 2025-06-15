const isProd = process.env.NODE_ENV === 'production';

const repoName = 'my-lair'; // your repo name on GitHub

module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // required for next export if you're using next/image
  },
};
