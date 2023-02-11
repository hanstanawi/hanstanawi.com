import { Link as SmoothScrollLink } from 'react-scroll';

type NavItemProps = {
  title: string;
  link: string;
};

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <li className='cursor-pointer text-black'>
      <SmoothScrollLink
        to={link}
        smooth={true}
        duration={700}
        offset={-20}
        className='border-b hover:border-black border-transparent pb-1 transition duration-300'
      >
        {title}
      </SmoothScrollLink>
    </li>
  );
};

export default NavItem;
