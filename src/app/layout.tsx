import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavigationLayout from 'components/layouts/NavigationLayout';
import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';

import Providers from './providers';

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hanstanawi.com'),
  title: {
    default: 'Hans Tanawi | Full Stack Engineer',
    template: '%s | Hans Tanawi',
  },
  description: 'Hans Tanawi Personal Website & Portfolio',
  openGraph: {
    title: 'Hans Tanawi',
    description: 'Software Engineer. Full Stack Engineer.',
    url: 'https://hanstanawi.com',
    siteName: 'Hans Tanawi',
    images: {
      url: 'https://res.cloudinary.com/dbuvuwofy/image/upload/v1677857831/hanstanawi.com/hanstanawi-logo_smcpsu.png',
      alt: 'Hans Tanawi Logo',
      width: 1920,
      height: 1080,
    },
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Hans Tanawi',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body className="bg-white transition duration-300 dark:bg-darkV2">
        <Providers>
          <NavigationLayout>{children}</NavigationLayout>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
