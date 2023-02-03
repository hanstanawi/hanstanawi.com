import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/hanstanawi',
  LINKEDIN: 'https://linkedin.com/in/hans-tanawi',
  INSTAGRAM: 'https://instagram.com/hanstanawi',
};

const SocialLinks = () => {
  return (
    <div className='flex gap-x-4 my-4'>
      <Link href={SOCIAL_LINKS.GITHUB}>
        <a target='_blank' className='cursor-pointer'>
          <FaGithub className='hover:text-black text-gray-500' size={27} />
        </a>
      </Link>
      <Link href={SOCIAL_LINKS.LINKEDIN}>
        <a target='_blank' className='cursor-pointer'>
          <FaLinkedin className='hover:text-black text-gray-500' size={27} />
        </a>
      </Link>
      <Link href={SOCIAL_LINKS.INSTAGRAM}>
        <a target='_blank' className='cursor-pointer'>
          <FaInstagram className='hover:text-black text-gray-500' size={27} />
        </a>
      </Link>
    </div>
  );
};

export default SocialLinks;
