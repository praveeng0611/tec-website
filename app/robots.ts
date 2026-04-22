import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://tec.gnosisolabs.com/sitemap.xml',
    host: 'https://tec.gnosisolabs.com',
  };
}
