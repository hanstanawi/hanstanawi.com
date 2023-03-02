import SectionLayout from 'components/SectionLayout';
import ProjectsList from './components/ProjectsList';

const Projects = () => {
  return (
    <section id='project'>
      <SectionLayout>
        <div className='md:h-[800px] h-[2200px] w-full flex flex-col justify-center'>
          {/* TITLE */}
          <div className='flex items-center justify-center mb-10'>
            <h1 className='md:text-2xl text-xl font-semibold text-center'>
              Other Noteworthy Projects
            </h1>
          </div>
          <div className='flex justify-center'>
            <ProjectsList />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Projects;
