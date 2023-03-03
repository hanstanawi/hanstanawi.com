import { Link as SmoothScrollLink } from 'react-scroll';
import Button from 'components/Button';
import SectionLayout from 'components/SectionLayout';
import SocialLinks from 'components/SocialLinks';

const SUBTITLE = `I'm a full stack engineer specializing building things for web
and based in Taipei, Taiwan`;

const Hero = () => {
  return (
    <section id='hero'>
      <SectionLayout>
        <div className='h-[100vh] flex flex-col justify-center items-start gap-y-2 pt-14'>
          <p className='text-gray-500 md:text-xl text-lg font-light pb-2'>
            Hi, my name is
          </p>
          <h1 className='text-black md:text-7xl text-5xl'>Hans Tanawi.</h1>
          <h3 className='text-gray-500 md:text-3xl text-xl font-light md:w-2/3 w-11/12 md:pb-4 pb-1'>
            {SUBTITLE}
          </h3>
          <SocialLinks />
          <SmoothScrollLink
            to={'featured'}
            smooth={true}
            duration={700}
            offset={-20}
          >
            <Button sizeClasses='md:px-8 px-7 md:py-4 py-3 md:text-base text-sm'>
              Check out my projects
            </Button>
          </SmoothScrollLink>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Hero;
