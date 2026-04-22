export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://tec.gnosisolabs.com/sitemap.xml',
    host: 'https://tec.gnosisolabs.com',
  };
}
