import Button from 'components/Button';
import Link from 'next/link';
import Logo from 'public/icons/ht-logo.svg';

type NavItemProps = {
  title: string;
  link: string;
};

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <li className='cursor-pointer text-gray-500 hover:text-black'>
      <Link href={link}>
        <a className='border-b border-black pb-2'>{title}</a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className='w-full bg-white fixed h-24 flex items-center border-b border-gray-200 z-20'>
      {/* CONTAINER */}
      <div className='flex container justify-between mx-auto items-center px-10'>
        {/* LOGO */}
        <div className='flex items-center gap-x-1'>
          <Logo />
          <div className='text-sm'>
            <p>Hans Tanawi</p>
            <p>Full Stack Engineer</p>
          </div>
        </div>
        {/* NAV */}
        <nav className='flex items-center gap-x-12'>
          <ul className='flex gap-x-10 text-base'>
            <NavItem title='About' link='#' />
            <NavItem title='Experience' link='#' />
            <NavItem title='Projects' link='#' />
            <NavItem title='Contact' link='#' />
          </ul>
          <button className='bg-transparent rounded-lg font-medium text-sm text-black border border-gray-700 px-4 py-3 hover:text-white hover:bg-black'>
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
