import Link from 'next/link';

type NavItemProps = {
  title: string;
  link: string;
};

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <li className='cursor-pointer text-gray-500 hover:text-black'>
      <Link href={link}>
        <a className='border-b hover:border-black border-transparent pb-1 transition duration-300'>
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
