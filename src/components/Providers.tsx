'use client';
import { useEffect, type PropsWithChildren } from 'react';
import DarkModeContextProvider from 'context/DarkModeContext';
import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';

const Providers = ({ children }: PropsWithChildren) => {
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

  return (
    <>
      <DarkModeContextProvider>
        <Navbar />
        {children}
        <Footer />
      </DarkModeContextProvider>
    </>
  );
};

export default Providers;