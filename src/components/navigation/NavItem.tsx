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
        className="border-b-[1.5px] border-transparent pb-1 text-black transition duration-300 hover:border-black dark:text-gray-300 dark:hover:border-tealGreen dark:hover:text-tealGreen"
        href={link}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
