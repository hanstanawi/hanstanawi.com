import Button from 'components/Button';
import SectionLayout from 'components/layout/SectionLayout';
import SocialLinks from './components/SocialLinks';

const SUBTITLE = `I'm a full stack engineer specializing building things for web
and based in Taipei, Taiwan`;

const Hero = () => {
  return (
    <section id='hero'>
      <SectionLayout>
        <div className='md:h-[700px] h-[650px] flex flex-col justify-center items-start gap-y-2 pt-14'>
          <p className='text-gray-500 md:text-base text-sm font-light pb-2'>
            Hi, my name is
          </p>
          <h1 className='text-black md:text-7xl text-5xl'>Hans Tanawi.</h1>
          <h3 className='text-gray-500 md:text-3xl text-xl font-light w-2/3 md:pb-4 pb-1'>
            {SUBTITLE}
          </h3>
          <SocialLinks />
          <Button sizeClasses='md:px-8 px-7 md:py-4 py-3 md:text-base text-sm'>
            Check out my projects
          </Button>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Hero;
