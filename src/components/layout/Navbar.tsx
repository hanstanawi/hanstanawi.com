import Link from 'next/link';
import Logo from 'public/icons/ht-logo.svg';

const Navbar = () => {
  return (
    <header className='w-full bg-transparent fixed h-24 flex items-center'>
      {/* CONTAINER */}
      <div className='flex container justify-between mx-auto items-center px-10'>
        {/* LOGO */}
        <div className='flex items-center'>
          <Logo />
          <div className='text-sm'>
            <p>Hans Tanawi</p>
            <p>Frontend Engineer</p>
          </div>
        </div>
        {/* NAV */}
        <nav>
          <ul className='flex gap-x-14 text-lg'>
            <li>
              <Link href={'#'}>
                <a className='border-b border-black'>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>Experience</Link>
            </li>
            <li>
              <Link href='#'>Project</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
