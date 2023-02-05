import Button from 'components/Button';
import Link from 'next/link';
import Logo from 'public/icons/ht-logo.svg';
import Hamburger from './Hamburger';

type NavItemProps = {
  title: string;
  link: string;
};

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <li className='cursor-pointer text-gray-500 hover:text-black'>
      <Link href={link}>
        <a className='border-b hover:border-black border-transparent pb-1'>
          {title}
        </a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className='w-full bg-white fixed h-24 flex items-center border-b border-gray-200 z-20'>
      {/* CONTAINER */}
      <div className='flex container justify-between mx-auto items-center md:px-10 px-6'>
        {/* LOGO */}
        <div className='flex items-center gap-x-1'>
          <Logo />
          <div className='text-sm hidden md:block'>
            <p>Hans Tanawi</p>
            <p>Full Stack Engineer</p>
          </div>
        </div>
        {/* NAV DESKTOP */}
        <nav className='sm:flex items-center gap-x-12 hidden'>
          <ul className='flex gap-x-10 text-base'>
            <NavItem title='About' link='#' />
            <NavItem title='Experience' link='#' />
            <NavItem title='Projects' link='#' />
            <NavItem title='Contact' link='#' />
          </ul>
          <Button sizeClasses='px-4 py-2.5 text-sm'>Resume</Button>
        </nav>
        {/* NAV MOBILE */}
        <Hamburger isOpen={false} onToggleOpen={() => {}} />
      </div>
    </header>
  );
};

export default Navbar;
