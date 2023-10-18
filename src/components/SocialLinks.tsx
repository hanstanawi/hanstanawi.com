import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/hanstanawi',
  LINKEDIN: 'https://linkedin.com/in/hans-tanawi',
  INSTAGRAM: 'https://instagram.com/hanstanawi',
  DISCORD: 'https://discordapp.com/users/448399646809915392',
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
      <div className="md:flex gap-x-4 my-4 hidden">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub
            className="hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500 transition duration-500"
            size={desktopSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            className="hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500 transition duration-500"
            size={desktopSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.INSTAGRAM}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            className="hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500 transition duration-500"
            size={desktopSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.DISCORD}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="discord"
        >
          <FaDiscord
            className="hover:text-black dark:hover:text-tealGreen dark:text-gray-300 text-gray-500 transition duration-500"
            size={desktopSize}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="flex gap-x-4 my-4 md:hidden">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub
            className="dark:text-gray-300 text-gray-500"
            size={mobileSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            className="dark:text-gray-300 text-gray-500"
            size={mobileSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.INSTAGRAM}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            className="dark:text-gray-300 text-gray-500"
            size={mobileSize}
          />
        </Link>
        <Link
          href={SOCIAL_LINKS.DISCORD}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Discord"
        >
          <FaDiscord
            className="dark:text-gray-300 text-gray-500"
            size={mobileSize}
          />
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
