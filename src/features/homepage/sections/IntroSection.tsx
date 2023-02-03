import Button from 'components/Button';
import SectionLayout from 'components/layout/SectionLayout';
import SocialLinks from '../components/SocialLinks';

const SUBTITLE = `I'm a full stack engineer specializing building things for web
and based in Taipei, Taiwan`;

const IntroSection = () => {
  return (
    <section>
      <SectionLayout>
        <div className='h-[700px] flex flex-col justify-center items-start gap-y-2 pt-14'>
          <p className='text-gray-500 text-base font-light pb-2'>
            Hi, my name is
          </p>
          <h1 className='text-black text-7xl'>Hans Tanawi.</h1>
          <h3 className='text-gray-500 text-3xl font-light w-2/3 pb-4'>
            {SUBTITLE}
          </h3>
          <SocialLinks />
          <Button>Check out my projects</Button>
        </div>
      </SectionLayout>
    </section>
  );
};

export default IntroSection;
