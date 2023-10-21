'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from 'components/ui/Button';
import { LINKS } from 'constants/navigation.constant';

type SideNavbarProps = {
  onClickClose: () => void;
};

const sideVariants = {
  closed: {
    transition: {
      // staggerChildren: 0.2,
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

const SideNavbar = ({ onClickClose }: SideNavbarProps) => {
  return (
    <motion.aside
      className="fixed right-0 top-0 z-40 flex h-screen 
      max-h-screen w-3/4 flex-col items-center justify-center bg-inherit lg:hidden"
      initial={{ width: 0 }}
      animate={{
        width: '75%',
        transition: {
          duration: 0.4,
        },
      }}
      exit={{
        width: 0,
        transition: { duration: 0.4 },
      }}
    >
      <motion.ul
        className="flex flex-col justify-center gap-y-12 md:gap-y-16"
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
      >
        {LINKS.map((link) => (
          <Link href={link.link} key={link.title}>
            <motion.li
              className="cursor-pointer text-2xl text-black dark:text-gray-300 md:text-4xl"
              variants={itemVariants}
              onClick={onClickClose}
            >
              {link.title}
            </motion.li>
          </Link>
        ))}
        <motion.div variants={itemVariants}>
          <Link href={'/resume.pdf'} target="_blank" rel="noreferrer">
            <Button sizeClasses="md:px-10 px-8 md:py-5 py-3 md:text-3xl text-lg">
              Resume
            </Button>
          </Link>
        </motion.div>
      </motion.ul>
    </motion.aside>
  );
};

export default SideNavbar;
