import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className='dark:bg-darkV2 bg-white transition duration-300'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}

export default MyApp;
