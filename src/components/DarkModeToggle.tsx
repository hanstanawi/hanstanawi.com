import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const checkDarkMode = (): boolean =>
  (localStorage && localStorage.theme === 'dark') ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const getThemeString = (isDark: boolean): string => (isDark ? 'dark' : 'light');

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = (): void => {
    localStorage.theme = getThemeString(!isDark);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(checkDarkMode());
  }, []);

  // const darkModeActive: boolean =
  //       process.browser && document.documentElement.classList.contains('dark')

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.button
        className='text-2xl text-gray-400 focus:outline-none'
        onClick={() => toggleMode()}
        key={isDark ? 'dark-icon' : 'light-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* {isDark ? '🌙' : '🌤️'} */}
        {isDark ? <RiMoonFill /> : <RiSunFill />}
      </motion.button>
    </AnimatePresence>
  );
};

export default DarkModeToggle;
