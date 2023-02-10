import { motion } from 'framer-motion';

type SideNavbarProps = {
  isOpen: boolean;
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const SideNavbar = () => {
  return (
    <motion.aside
      className='fixed bg-white h-full w-3/4 right-0 flex flex-col items-center justify-center z-10'
      initial={{ width: 0 }}
      animate={{
        width: '75%',
      }}
      exit={{
        width: 0,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
      >
        <div>
          <h1>Test</h1>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default SideNavbar;
