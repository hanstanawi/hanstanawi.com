import { otherProjects } from 'features/projects/projects.constant';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12'>
      {otherProjects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
