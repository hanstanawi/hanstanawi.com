import SectionLayout from 'components/layout/SectionLayout';
import Image from 'next/image';
import SkillList from './components/SkillList';
import SkillSection from './components/SkillSection';

const About = () => {
  return (
    <section id='about'>
      <SectionLayout>
        <div className='h-[500px] flex justify-center items-center gap-x-16 w-full'>
          {/* IMAGE */}
          <div className='w-1/2'>
            <div className='h-[1px] w-full bg-[#E5E5E5] mb-7'></div>
            <Image
              src='/profile.jpg'
              height='550'
              width='550'
              objectFit='cover'
              alt='profile'
            />
          </div>
          <div className='w-1/2'>
            <h2 className='text-5xl text-black pb-7'>About</h2>
            <div className='flex flex-col gap-y-5 text-gray-500 text-justify text-lg'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
              <p className='pb-4'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <SkillSection />
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default About;
