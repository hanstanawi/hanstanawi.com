import Image from 'next/image';
import { useState } from 'react';

import Logo from 'public/icons/ht-logo.svg';
import Button from '../Button';
import Hamburger from './Hamburger';
import NavItem from './NavItem';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className='w-full bg-white fixed md:h-24 h-[72px] flex items-center  border-gray-200 z-20 shadow-md'>
      {/* CONTAINER */}
      <div className='flex container justify-between mx-auto items-center md:px-10 px-6'>
        {/* LOGO */}
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
        {/* NAV DESKTOP */}
        <nav className='md:flex items-center gap-x-12 hidden'>
          <ul className='flex gap-x-10 text-base'>
            <NavItem title='About' link='#' />
            <NavItem title='Experience' link='#' />
            <NavItem title='Projects' link='#' />
            <NavItem title='Contact' link='#' />
          </ul>
          <Button sizeClasses='px-4 py-2.5 text-sm'>Resume</Button>
        </nav>
        {/* NAV MOBILE */}
        <Hamburger
          isOpen={isMobileNavOpen}
          onToggleOpen={() => setIsMobileNavOpen((prevState) => !prevState)}
        />
      </div>
    </header>
  );
};

export default Navbar;
