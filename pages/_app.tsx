import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
