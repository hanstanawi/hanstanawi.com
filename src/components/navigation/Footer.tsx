import Link from 'next/link';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center md:py-6 py-12'>
      <SocialLinks small />
      <div className='text-gray-400 text-xs pt-1.5 text-center'>
        <Link href={'mailto:hanstanawi@gmail.com'}>
          <a>hanstanawi@gmail.com</a>
        </Link>
        <p className='pt-1'>Designed & Built by Hans Tanawi</p>
      </div>
    </footer>
  );
};

export default Footer;
