import { projects } from 'features/projects/projects.constant';
import FeaturedProject from './FeaturedProject';

const FeaturedProjectsList = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-y-24'>
      {projects.map((project, idx) => (
        <FeaturedProject key={project.id} index={idx} project={project} />
      ))}
    </div>
  );
};

export default FeaturedProjectsList;
