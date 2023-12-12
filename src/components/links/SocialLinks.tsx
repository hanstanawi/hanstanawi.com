import Link from 'next/link';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
      <div className="my-4 hidden gap-x-4 md:flex">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub
            className="text-gray-500 transition duration-500 hover:text-black dark:text-gray-300 dark:hover:text-tealGreen"
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
            className="text-gray-500 transition duration-500 hover:text-black dark:text-gray-300 dark:hover:text-tealGreen"
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
            className="text-gray-500 transition duration-500 hover:text-black dark:text-gray-300 dark:hover:text-tealGreen"
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
            className="text-gray-500 transition duration-500 hover:text-black dark:text-gray-300 dark:hover:text-tealGreen"
            size={desktopSize}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="my-4 flex gap-x-4 md:hidden">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub
            className="text-gray-500 dark:text-gray-300"
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
            className="text-gray-500 dark:text-gray-300"
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
            className="text-gray-500 dark:text-gray-300"
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
            className="text-gray-500 dark:text-gray-300"
            size={mobileSize}
          />
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
