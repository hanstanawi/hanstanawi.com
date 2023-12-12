import { projects } from '../featured.constant';
import FeaturedProject from './ProjectItem';

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
