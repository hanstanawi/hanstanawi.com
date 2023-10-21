import FeaturedProject from './ProjectItem';
import { projects } from '../featured.constant';

const ProjectsList = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-20 md:gap-y-28">
      {projects.map((project, idx) => (
        <FeaturedProject key={project.id} index={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
