import cx from 'classnames';
import Link from 'next/link';
import { Link as SmoothScrollLink } from 'react-scroll';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import Overlay from 'components/Overlay';
import Logo from 'public/icons/ht-logo.svg';
import Button from '../Button';
import Hamburger from './Hamburger';
import DarkModeToggle from 'components/DarkModeToggle';
import NavItem from './NavItem';
import SideNavbar from './SideNavbar';
import useScrollLock from 'hooks/use-scroll-lock';
import useScrollVisible from 'hooks/use-scroll-visible';
import { LINKS } from 'constants/navigation.constant';
import { animateInViewElement } from 'lib/animation.lib';

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const visible = useScrollVisible();
  const { lockScroll, unlockScroll } = useScrollLock();
  const navbarRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(navbarRef, { once: true, amount: 0 });

  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open, lockScroll, unlockScroll]);

  return (
    <>
      <header
        className={cx(
          'w-full dark:bg-inherit bg-white fixed md:h-24 h-[80px] flex items-center border-b dark:border-transparent border-gray-200 z-20 transition-top duration-700',
          visible ? 'top-0 left-0' : '-top-[100px]'
        )}
        ref={navbarRef}
      >
        {/* CONTAINER */}
        <div className='flex container justify-between mx-auto items-center xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg max-w-sm sm:px-0 px-3 relative'>
          {/* LOGO */}
          <SmoothScrollLink
            to={'hero'}
            smooth={true}
            duration={700}
            offset={-20}
            className='cursor-pointer'
          >
            <div
              className='flex items-center gap-x-1 '
              style={animateInViewElement(isInView, {
                direction: 'translateY(-1px)',
                speed: 0.8,
              })}
            >
              <div className='dark:fill-white dark:filter dark:invert'>
                <Logo />
              </div>
              <div className='text-sm hidden lg:block dark:text-gray-300 text-black'>
                <p>Hans Tanawi</p>
                <p>Full Stack Engineer</p>
              </div>
            </div>
          </SmoothScrollLink>
          {/* NAV DESKTOP */}
          <nav className='lg:flex items-center gap-x-12 hidden'>
            <ul className='flex gap-x-12 text-base'>
              {LINKS.map((link, i) => (
                <NavItem
                  key={link.title}
                  title={link.title}
                  link={link.link}
                  isInView={isInView}
                  delay={(i + 1) * 100}
                />
              ))}
            </ul>
            <div className='flex items-center gap-x-8'>
              <Link href={'/resume.pdf'}>
                <a
                  target='_blank'
                  style={animateInViewElement(isInView, {
                    direction: 'translateY(-20px)',
                    speed: 0.3,
                    delay: 500,
                  })}
                >
                  <Button sizeClasses='px-4 py-2.5 text-sm'>Resume</Button>
                </a>
              </Link>
              <div
                style={animateInViewElement(isInView, {
                  direction: 'translateY(-20px)',
                  speed: 0.3,
                  delay: 600,
                })}
                className='md:flex block items-center'
              >
                <DarkModeToggle />
              </div>
            </div>
          </nav>
        </div>
        <Hamburger isOpen={open} onToggleOpen={cycleOpen} isInView={isInView} />
        {/* NAV MOBILE */}
        {open && <Overlay onClickClose={cycleOpen} />}
        <AnimatePresence>
          {open && <SideNavbar onClickClose={cycleOpen} />}
        </AnimatePresence>
      </header>
      <style jsx>{`
        .fill-white {
          filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(301deg)
            brightness(106%) contrast(102%);
        }
      `}</style>
    </>
  );
};

export default Navbar;
