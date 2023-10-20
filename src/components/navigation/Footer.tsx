import { motion } from 'framer-motion';
import Link from 'next/link';

import SocialLinks from '../links/SocialLinks';
import { EMAIl_ADDRESS } from 'constants/contact.constant';

const REPO_LINK = 'https://github.com/hanstanawi/hanstanawi.com';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center md:py-6 py-12">
      <SocialLinks small />
      <div className="dark:text-gray-300 text-gray-400 text-xs pt-1.5 text-center">
        <Link
          href={`mailto:${EMAIl_ADDRESS}`}
          className="hover:text-black dark:hover:text-tealGreen transition duration-100"
        >
          <motion.p whileHover={{ y: '-1px', scale: 1.01 }}>
            {EMAIl_ADDRESS}
          </motion.p>
        </Link>
        <div className="pt-1">
          <Link
            href={REPO_LINK}
            className="dark:hover:text-tealGreen hover:text-black transition duration-100"
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
