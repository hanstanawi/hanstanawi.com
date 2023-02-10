import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as SmoothScrollLink } from 'react-scroll';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import Logo from 'public/icons/ht-logo.svg';
import Button from '../Button';
import Hamburger from './Hamburger';
import NavItem from './NavItem';
import SideNavbar from './SideNavbar';
import useScrollVisible from 'hooks/use-scroll-visible';

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

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const visible = useScrollVisible();

  return (
    <>
      <header
        className={cx(
          'w-full bg-white fixed md:h-24 h-[72px] flex items-center border-b border-gray-200 z-50 transition-top duration-700',
          visible ? 'top-0 left-0' : '-top-[100px]'
        )}
      >
        {/* CONTAINER */}
        <div className='flex container justify-between mx-auto items-center md:px-10 px-6 relative'>
          {/* LOGO */}
          <SmoothScrollLink
            to={'hero'}
            smooth={true}
            duration={700}
            offset={-20}
            className='cursor-pointer'
          >
            <div className='flex items-center gap-x-1'>
              <div className='md:block hidden'>
                <Logo />
              </div>
              <div className='md:hidden block pt-1'>
                <Image
                  alt='logo'
                  src={'/icons/ht-logo.svg'}
                  width={36}
                  height={36}
                />
              </div>
              <div className='text-sm hidden md:block'>
                <p>Hans Tanawi</p>
                <p>Full Stack Engineer</p>
              </div>
            </div>
          </SmoothScrollLink>
          {/* NAV DESKTOP */}
          <nav className='md:flex items-center gap-x-12 hidden'>
            <ul className='flex gap-x-10 text-base'>
              <NavItem title='About' link='about' />
              <NavItem title='Experience' link='experience' />
              <NavItem title='Projects' link='project' />
              <NavItem title='Contact' link='contact' />
            </ul>
            <Link href={'/resume.pdf'}>
              <a target='_blank'>
                <Button sizeClasses='px-4 py-2.5 text-sm'>Resume</Button>
              </a>
            </Link>
          </nav>
          {/* NAV MOBILE */}
          <Hamburger isOpen={open} onToggleOpen={cycleOpen} />
        </div>
      </header>
      <AnimatePresence>{open && <SideNavbar />}</AnimatePresence>
    </>
  );
};

export default Navbar;
