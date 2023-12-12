import { AnimatePresence, motion } from 'framer-motion';
import useDarkMode from 'hooks/use-dark-mode';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const DarkModeToggle = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        className="text-2xl text-gray-800 focus:outline-none dark:text-yellow-500 sm:text-[26px]"
        aria-label="dark-mode-toggle"
        role="button"
        onClick={() => toggleMode()}
        key={isDark ? 'dark-icon' : 'light-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <RiMoonFill /> : <RiSunFill />}
      </motion.button>
    </AnimatePresence>
  );
};

export default DarkModeToggle;
