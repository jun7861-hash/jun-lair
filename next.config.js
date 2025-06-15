const isProd = process.env.NODE_ENV === 'production';

const repoName = 'jun-lair';

module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};
