import FeaturedProject from './ProjectItem';
import { projects } from '../featured.constant';

const ProjectsList = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center md:gap-y-28 gap-y-20'>
      {projects.map((project, idx) => (
        <FeaturedProject key={project.id} index={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
