import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from 'components/Button';
import { LINKS } from 'constants/navigation.constants';

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

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SideNavbar = () => {
  return (
    <motion.aside
      className='fixed bg-white max-h-screen h-screen w-3/4 right-0 
      top-0 flex flex-col items-center justify-center z-40 md:hidden'
      initial={{ width: 0 }}
      animate={{
        width: '75%',
      }}
      exit={{
        width: 0,
        transition: { delay: 0.7, duration: 0.5 },
      }}
    >
      <motion.ul
        className='flex flex-col justify-center gap-y-12'
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
      >
        {LINKS.map((link) => (
          <motion.li
            key={link.title}
            className='text-2xl text-black'
            variants={itemVariants}
          >
            {link.title}
          </motion.li>
        ))}
        <Link href={'/resume.pdf'}>
          <a target='_blank'>
            <Button sizeClasses='px-8 py-3 text-lg'>Resume</Button>
          </a>
        </Link>
      </motion.ul>
    </motion.aside>
  );
};

export default SideNavbar;
