import { animateInViewElement } from 'lib/animation.lib';
import { Link as SmoothScrollLink } from 'react-scroll';

type NavItemProps = {
  isInView: boolean;
  delay: number;
  title: string;
  link: string;
};

const NavItem = ({ title, link, isInView, delay }: NavItemProps) => {
  return (
    <li
      className='cursor-pointer text-black'
      style={animateInViewElement(isInView, {
        speed: 0.3,
        delay,
        direction: 'translateY(-20px)',
      })}
    >
      <SmoothScrollLink
        to={link}
        smooth={true}
        duration={700}
        offset={-60}
        className='border-b-[1.5px] hover:border-black border-transparent pb-1 transition duration-300'
      >
        {title}
      </SmoothScrollLink>
    </li>
  );
};

export default NavItem;
