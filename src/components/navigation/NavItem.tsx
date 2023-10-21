import { animateInViewElement } from 'lib/animation.lib';
import Link from 'next/link';

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
      <Link
        className="border-b-[1.5px] dark:text-gray-300 text-black dark:hover:border-tealGreen
         dark:hover:text-tealGreen hover:border-black border-transparent pb-1 transition duration-300"
        href={link}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
