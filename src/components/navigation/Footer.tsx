import { EMAIl_ADDRESS } from 'constants/contact.constant';
import { motion } from 'framer-motion';
import Link from 'next/link';

import SocialLinks from '../links/SocialLinks';

const REPO_LINK = 'https://github.com/hanstanawi/hanstanawi.com';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-12 md:py-6">
      <SocialLinks small />
      <div className="pt-1.5 text-center text-xs text-gray-400 dark:text-gray-300">
        <Link
          href={`mailto:${EMAIl_ADDRESS}`}
          className="transition duration-100 hover:text-black dark:hover:text-tealGreen"
        >
          <motion.p whileHover={{ y: '-1px', scale: 1.01 }}>
            {EMAIl_ADDRESS}
          </motion.p>
        </Link>
        <div className="pt-1">
          <Link
            href={REPO_LINK}
            className="transition duration-100 hover:text-black dark:hover:text-tealGreen"
            target="_blank"
            rel="noreferrer"
          >
            <motion.p whileHover={{ y: '-1px', scale: 1.01 }}>
              Designed & Built by Hans Tanawi
            </motion.p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
