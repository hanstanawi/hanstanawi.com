import { MetadataRoute } from 'next';
import { WEBSITE_URL } from 'constants/common.constant';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
    host: WEBSITE_URL,
  };
}
