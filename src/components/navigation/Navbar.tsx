import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Link as SmoothScrollLink } from 'react-scroll';
import { AnimatePresence, useCycle } from 'framer-motion';

import Overlay from 'components/Overlay';
import Logo from 'public/icons/ht-logo.svg';
import Button from '../Button';
import Hamburger from './Hamburger';
import NavItem from './NavItem';
import SideNavbar from './SideNavbar';
import useScrollVisible from 'hooks/use-scroll-visible';
import { LINKS } from 'constants/navigation.constants';

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const visible = useScrollVisible();

  return (
    <header
      className={cx(
        'w-full bg-white fixed md:h-24 h-[72px] flex items-center border-b border-gray-200 z-20 transition-top duration-700',
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
          <ul className='flex gap-x-12 text-base'>
            {LINKS.map((link) => (
              <NavItem key={link.title} title={link.title} link={link.link} />
            ))}
          </ul>
          <Link href={'/resume.pdf'}>
            <a target='_blank'>
              <Button sizeClasses='px-4 py-2.5 text-sm'>Resume</Button>
            </a>
          </Link>
        </nav>
      </div>
      <Hamburger isOpen={open} onToggleOpen={cycleOpen} />
      {/* NAV MOBILE */}
      {open && <Overlay onClickClose={cycleOpen} />}
      <AnimatePresence>
        {open && <SideNavbar onClickClose={cycleOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
