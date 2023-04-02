import { AnimatePresence, motion } from 'framer-motion';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import useDarkMode from 'hooks/use-dark-mode';

const DarkModeToggle = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.button
        className='text-[26px] dark:text-yellow-500 text-gray-800 focus:outline-none'
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
