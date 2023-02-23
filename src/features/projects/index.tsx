import SectionLayout from 'components/SectionLayout';
import FeaturedProjectsList from './components/featured/FeaturedProjectsList';

const Projects = () => {
  return (
    <section id='project'>
      <SectionLayout>
        <div className='h-full w-full'>
          {/* TITLE */}
          <div className='flex items-center md:gap-x-16 gap-x-4 mb-20'>
            <div className='h-[1px] bg-[#E5E5E5] md:w-3/4 w-3/4'></div>
            <h2 className='md:text-5xl text-3xl text-black md:w-1/4 w-1/4'>
              Projects
            </h2>
          </div>
          <FeaturedProjectsList />
        </div>
      </SectionLayout>
    </section>
  );
};

export default Projects;
