import { WEBSITE_URL } from 'constants/common.constant';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ['/', '/resume.pdf', '/blog'].map(
    (route) => ({
      url: `${WEBSITE_URL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 1,
    }),
  );

  return [...routes];
}
