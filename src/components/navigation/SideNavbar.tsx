import Link from 'next/link';
import { motion } from 'framer-motion';
import { Link as SmoothScrollLink } from 'react-scroll';

import Button from 'components/Button';
import { LINKS } from 'constants/navigation.constant';

type SideNavbarProps = {
  onClickClose: () => void;
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

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SideNavbar = ({ onClickClose }: SideNavbarProps) => {
  return (
    <motion.aside
      className='fixed bg-white max-h-screen h-screen w-3/4 right-0 
      top-0 flex flex-col items-center justify-center z-40 lg:hidden'
      initial={{ width: 0 }}
      animate={{
        width: '75%',
        transition: {
          duration: 0.4,
        },
      }}
      exit={{
        width: 0,
        transition: { delay: 0.7, duration: 0.5 },
      }}
    >
      <motion.ul
        className='flex flex-col justify-center md:gap-y-16 gap-y-12'
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
      >
        {LINKS.map((link) => (
          <SmoothScrollLink
            to={link.link}
            smooth={true}
            duration={700}
            offset={-60}
            delay={800}
            key={link.title}
          >
            <motion.li
              className='md:text-4xl text-2xl text-black cursor-pointer'
              variants={itemVariants}
              onClick={onClickClose}
            >
              {link.title}
            </motion.li>
          </SmoothScrollLink>
        ))}
        <motion.div variants={itemVariants}>
          <Link href={'/resume.pdf'}>
            <a target='_blank'>
              <Button sizeClasses='md:px-10 px-8 md:py-5 py-3 md:text-3xl text-lg'>
                Resume
              </Button>
            </a>
          </Link>
        </motion.div>
      </motion.ul>
    </motion.aside>
  );
};

export default SideNavbar;
