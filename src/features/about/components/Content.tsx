import Link from 'next/link';
import SkillSection from './SkillSection';

const Content = () => {
  return (
    <div className='md:w-1/2 w-full'>
      <div className='flex flex-col gap-y-3 text-gray-500 md:text-base text-sm'>
        <p>
          Hey! I&apos;m Hans, a full stack software engineer who enjoys building
          things that live on the internet. I love working in the realm between
          frontend and backend applications.
        </p>
        <p>
          Crafting beautiful UI components with excellent user experience and
          building performant and secure server APIs never fail to excite me.
        </p>
        <p>
          I&apos;ve had the privilege of working at one of most growing
          construction software start-ups in Germany at{' '}
          <Link href='https://molteo.com'>
            <a className='underline underline-offset-4 text-tealGreen'>
              Molteo
            </a>
          </Link>
          . My main focus these days is building web user interfaces and
          performant backend APIs at{' '}
          <Link href='https://getlumina.com'>
            <a className='underline underline-offset-4 text-tealGreen'>
              Lumina
            </a>
          </Link>{' '}
          and working on my side projects whilst learning new technologies.
        </p>
        <p>
          I grew up in Indonesia and continued my study in Taiwan. Having the
          opportunity to pursue my study abroad, not only learn about new
          experience and culture, but also make me fluent in Chinese and English
          professionally.
        </p>
        <p className='mt-4'>Technologies I’ve been working with recently:</p>
        <SkillSection />
      </div>
    </div>
  );
};

export default Content;
