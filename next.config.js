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
  env: {
    publicNewsKey: '5a10f779c5594b3e8b65b893d17c201f',
    emailjsServiceId: '5a10f779c5594b3e8b65b893d17c201f',
    emailjsTemplateId: 'template_sv4ts4b',
    emailjsPublicKey: '5a10f779c5594b3e8b65b893d17c201f',
  },
};
