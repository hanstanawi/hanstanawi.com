import { SEOContent } from 'types/seo.type';

export function createSeoConfig({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  ogLocale,
}: SEOContent) {
  return {
    title,
    description,
    canonical,
    openGraph: {
      url: canonical,
      title: title,
      description: description,
      locale: ogLocale,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: ogImageAlt,
        },
      ],
    },
  };
}
