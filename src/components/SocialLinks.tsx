import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/hanstanawi',
  LINKEDIN: 'https://linkedin.com/in/hans-tanawi',
  INSTAGRAM: 'https://instagram.com/hanstanawi',
};

type SocialLinksProps = {
  small?: boolean;
};

const SocialLinks = ({ small = false }: SocialLinksProps) => {
  const desktopSize = small ? 22 : 27;
  const mobileSize = small ? 16 : 20;

  return (
    <>
      {/* DESKTOP */}
      <div className='md:flex gap-x-4 my-4 hidden'>
        <Link href={SOCIAL_LINKS.GITHUB}>
          <a target='_blank' className='cursor-pointer'>
            <FaGithub
              className='hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500 transition duration-500'
              size={desktopSize}
            />
          </a>
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN}>
          <a target='_blank' className='cursor-pointer'>
            <FaLinkedin
              className='hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500  transition duration-500'
              size={desktopSize}
            />
          </a>
        </Link>
        <Link href={SOCIAL_LINKS.INSTAGRAM}>
          <a target='_blank' className='cursor-pointer'>
            <FaInstagram
              className='hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500  transition duration-500'
              size={desktopSize}
            />
          </a>
        </Link>
      </div>
      {/* MOBILE */}
      <div className='flex gap-x-4 my-4 md:hidden'>
        <Link href={SOCIAL_LINKS.GITHUB}>
          <a target='_blank' className='cursor-pointer'>
            <FaGithub
              className='dark:text-gray-300 text-gray-500'
              size={mobileSize}
            />
          </a>
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN}>
          <a target='_blank' className='cursor-pointer'>
            <FaLinkedin
              className='dark:text-gray-300 text-gray-500'
              size={mobileSize}
            />
          </a>
        </Link>
        <Link href={SOCIAL_LINKS.INSTAGRAM}>
          <a target='_blank' className='cursor-pointer'>
            <FaInstagram
              className='dark:text-gray-300 text-gray-500'
              size={mobileSize}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
