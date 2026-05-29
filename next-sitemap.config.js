/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webnex.co.in',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api'],
      },
    ],
  },
};
