export default function sitemap() {
  const SITE_URL = 'https://tec.gnosisolabs.com';
  const now = new Date().toISOString();
  return [
    { url: SITE_URL,                    lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/products`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/sustainability`,lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/find-us`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
