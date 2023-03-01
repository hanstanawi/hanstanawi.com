import SectionLayout from 'components/SectionLayout';
import ProjectsList from './components/ProjectsList';

const Projects = () => {
  return (
    <section id='project'>
      <SectionLayout>
        <div className='h-full w-full'>
          {/* TITLE */}
          <div className='flex items-center justify-center md:mb-10 mb-5'>
            <h1 className='text-2xl font-semibold text-center'>
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
