import SectionLayout from 'components/layout/SectionLayout';
import Content from './components/Content';
import ProfileImage from './components/ProfileImage';

const About = () => {
  return (
    <section id='about'>
      <SectionLayout>
        <div className='h-[600px] w-full'>
          {/* TITLE */}
          <div className='flex items-center md:gap-x-16 gap-x-4 mb-6'>
            <div className='h-[1px] bg-[#E5E5E5] md:w-1/2 w-3/4'></div>
            <h2 className='md:text-5xl text-3xl text-black md:w-1/2 w-1/4'>
              About
            </h2>
          </div>
          {/* CONTENT */}
          <div className='flex md:flex-row flex-col-reverse md:gap-x-16 gap-x-0 md:gap-y-0 gap-y-8 items-start'>
            <ProfileImage />
            <Content />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default About;
