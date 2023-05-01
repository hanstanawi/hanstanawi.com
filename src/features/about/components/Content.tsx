import Link from 'next/link';
import SkillSection from './SkillSection';

const Content = () => {
  return (
    <div className='lg:w-1/2 md:w-11/12 w-full'>
      <div className='flex flex-col gap-y-3 dark:text-gray-400 text-gray-500 md:text-base text-sm'>
        <p>
          Hey there! I&apos;m Hans, a full stack software engineer who enjoys
          building things that live on the internet. I love working in the realm
          between frontend and backend applications.
        </p>
        <p>
          I grew up in Indonesia and continued my career in Taiwan. Having the
          opportunity to pursue my career abroad, not only learn about new
          experience and culture, but also make me fluent in Chinese and English
          professionally.
        </p>
        <p>
          Crafting beautiful UI components with excellent user experience and
          building performant and secure server APIs never fail to excite me.
          <br />c My main focus these days is building web user interfaces and
          performant backend APIs and working on my side projects whilst
          learning new technologies.
        </p>
        <p className='mt-4'>Technologies I’ve been working with recently:</p>
        <SkillSection />
      </div>
    </div>
  );
};

export default Content;
