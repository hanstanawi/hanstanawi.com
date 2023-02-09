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

const SideNavbar = ({ isOpen }: SideNavbarProps) => {
  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{
        width: 300,
      }}
      exit={{
        width: 0,
        transition: { delay: 0.7, duration: 0.3 },
      }}
    >
      <motion.div
        className='fixed bg-white h-full w-3/4 right-0 flex flex-col items-center justify-center border-b border-black z-30'
        initial='closed'
        animate='isOpen'
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
