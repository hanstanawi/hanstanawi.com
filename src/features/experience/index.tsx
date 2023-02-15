import SectionLayout from 'components/SectionLayout';
import ExperienceTab from './components/ExperienceTab';
import ExperienceTimeline from './components/ExperienceTimeline';

const Experience = () => {
  return (
    <section id='experience'>
      <SectionLayout>
        <div className='h-[1100px] md:h-[900px] w-full'>
          <div className='h-full flex flex-col justify-center'>
            <div className='flex items-center md:gap-x-1 md:mb-6 mb-2'>
              <h2 className='md:text-5xl text-2xl text-black w-3/4 md:w-5/12'>
                Where I&apos;ve Worked
              </h2>
              <div className='h-[1px] bg-[#E5E5E5] w-1/4 md:w-7/12'></div>
            </div>
            <div className='flex justify-center pt-10'>
              {/* TABS */}
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Experience;
