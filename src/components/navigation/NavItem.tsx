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
      className="cursor-pointer text-black"
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
        className="border-b-[1.5px] border-transparent pb-1 text-black
         transition duration-300 hover:border-black dark:text-gray-300 dark:hover:border-tealGreen dark:hover:text-tealGreen"
      >
        {title}
      </SmoothScrollLink>
    </li>
  );
};

export default NavItem;
