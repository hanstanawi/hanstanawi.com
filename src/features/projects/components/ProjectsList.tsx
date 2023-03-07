import { otherProjects } from 'features/projects/projects.constant';
import ProjectItem from './ProjectItem';

function calculateDelay(index: number): number {
  return (index + 2) * 100; // add 100ms
}

const ProjectsList = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:w-11/12 w-full'>
      {otherProjects.map((project, i) => (
        <ProjectItem
          key={project.id}
          project={project}
          delay={calculateDelay(i)}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
