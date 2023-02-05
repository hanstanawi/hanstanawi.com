import SectionLayout from 'components/layout/SectionLayout';
import Content from './components/Content';
import ProfileImage from './components/ProfileImage';

const About = () => {
  return (
    <section id='about'>
      <SectionLayout>
        <div className='h-[600px] w-full'>
          {/* TITLE */}
          <div className='flex items-center gap-x-16 mb-6'>
            <div className='h-[1px] bg-[#E5E5E5] w-1/2'></div>
            <h2 className='text-5xl text-black w-1/2'>About</h2>
          </div>
          {/* CONTENT */}
          <div className='flex gap-x-16 items-start'>
            <ProfileImage />
            <Content />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default About;
