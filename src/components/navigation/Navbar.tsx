'use client';

import Link from 'next/link';
import { AnimatePresence, useCycle } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import Overlay from 'components/layouts/Overlay';
import Logo from 'public/icons/ht-logo.svg';
import Button from '../ui/Button';
import Hamburger from './Hamburger';
import DarkModeToggle from 'components/ui/DarkModeToggle';
import NavItem from './NavItem';
import SideNavbar from './SideNavbar';
import useScrollLock from 'hooks/use-scroll-lock';
import useScrollVisible from 'hooks/use-scroll-visible';
import { LINKS } from 'constants/navigation.constant';
import { animateInViewElement } from 'lib/animation.lib';
import { cn } from 'lib/utils.lib';

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
        className={cn(
          'fixed z-20 flex h-[80px] w-full items-center border-b border-gray-200 bg-white transition-top duration-700 dark:border-transparent dark:bg-inherit md:h-24',
          visible ? 'left-0 top-0' : '-top-[100px]',
        )}
        ref={navbarRef}
      >
        {/* CONTAINER */}
        <div className="container relative mx-auto flex max-w-sm items-center justify-between px-3 sm:max-w-lg sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          {/* LOGO */}
          <Link href="/#hero" className="cursor-pointer" aria-label="Homepage">
            <div
              className="flex items-center gap-x-1 "
              style={animateInViewElement(isInView, {
                direction: 'translateY(-1px)',
                speed: 0.8,
              })}
            >
              <div className="dark:fill-white dark:invert dark:filter">
                <Logo />
              </div>
              <div className="hidden text-sm text-black dark:text-gray-300 lg:block">
                <p>Hans Tanawi</p>
                <p>Full Stack Engineer</p>
              </div>
            </div>
          </Link>
          {/* NAV DESKTOP */}
          <nav className="hidden items-center gap-x-12 lg:flex">
            <ul className="flex gap-x-12 text-base">
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
            <div className="flex items-center gap-x-8">
              <Link
                href={'/resume.pdf'}
                target="_blank"
                style={animateInViewElement(isInView, {
                  direction: 'translateY(-20px)',
                  speed: 0.3,
                  delay: 500,
                })}
              >
                <Button sizeClasses="px-4 py-2.5 text-sm">Resume</Button>
              </Link>
              <div
                style={animateInViewElement(isInView, {
                  direction: 'translateY(-20px)',
                  speed: 0.3,
                  delay: 600,
                })}
                className="block items-center md:flex"
              >
                <DarkModeToggle />
              </div>
            </div>
          </nav>
          <Hamburger
            isOpen={open}
            onToggleOpen={cycleOpen}
            isInView={isInView}
          />
        </div>
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
