import { Analytics } from '@vercel/analytics/react';
import Providers from 'components/Providers';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hans Tanawi | Full Stack Engineer',
  description: 'Hans Tanawi Personal Website & Portfolio',
  metadataBase: new URL('https://hanstanawi.com'),
  openGraph: {
    images: {
      url: 'https://res.cloudinary.com/dbuvuwofy/image/upload/v1677857831/hanstanawi.com/hanstanawi-logo_smcpsu.png',
      alt: 'Hans Tanawi Logo',
    },
    locale: 'en_US',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body className="dark:bg-darkV2 bg-white transition duration-300">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;