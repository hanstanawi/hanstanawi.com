import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import * as analytics from 'lib/analytics.lib';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import GoogleAnalytics from 'components/analytics/GoogleAnalytics';
import DarkModeContextProvider from 'context/DarkModeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

    // Watch for changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light';
        if (colorScheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleAnalytics />
      <DarkModeContextProvider>
        <div className='dark:bg-darkV2 bg-white transition duration-300'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <Analytics />
        </div>
      </DarkModeContextProvider>
    </>
  );
}

export default MyApp;
