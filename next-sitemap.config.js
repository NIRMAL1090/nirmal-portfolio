/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://nirmal.social',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    sitemapBaseFileName: 'sitemap', // 👈 Optional, cleaner filename
    exclude: [
        '/404',
        '/api/*',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    outDir: 'public',
}