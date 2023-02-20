import SectionLayout from 'components/SectionLayout';

const Projects = () => {
  return (
    <section id='project'>
      <SectionLayout>
        <div className='h-[900px] md:h-[650px] w-full'>
          {/* TITLE */}
          <div className='flex items-center md:gap-x-16 gap-x-4 mb-6 h-full'>
            <div className='h-[1px] bg-[#E5E5E5] md:w-3/4 w-3/4'></div>
            <h2 className='md:text-5xl text-3xl text-black md:w-1/4 w-1/4'>
              Projects
            </h2>
          </div>
          {/* CONTENT */}
        </div>
      </SectionLayout>
    </section>
  );
};

export default Projects;
