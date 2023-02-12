import SectionLayout from 'components/SectionLayout';
import ExperienceTab from './components/ExperienceTab';

const Experience = () => {
  return (
    <section id='experience'>
      <SectionLayout>
        <div className='h-[900px] md:h-[650px] w-full'>
          <div className='h-full flex flex-col justify-center'>
            <div className='flex items-center md:gap-x-16 gap-x-4 mb-6'>
              <h2 className='md:text-4xl text-3xl text-black '>
                Where I&apos;ve Worked
              </h2>
              <div className='h-[1px] bg-[#E5E5E5] w-2/3'></div>
            </div>
            <div className='flex justify-center pt-10'>
              {/* TABS */}
              <ExperienceTab />
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Experience;
