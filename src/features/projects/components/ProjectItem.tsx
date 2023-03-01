import { FaRegFolder } from 'react-icons/fa';

import ProjectLinks from 'components/ProjectLinks';
import { Project } from 'types/projects.type';

type ProjectItemProps = {
  project: Omit<Project, 'imageSrc'>;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className='flex flex-col justify-start items-center p-6 border border-gray-200 rounded-md shadow-lg'>
      <div className='flex justify-between w-full mb-4 items-center'>
        <FaRegFolder size={35} className='text-tealGreen' />
        <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
      <div className='flex flex-col gap-y-4'>
        <h3 className='text-black font-semibold text-xl'>{project.title}</h3>
        <p className='text-sm'>{project.description}</p>
        <div className='flex md:gap-x-4 md:gap-y-0 gap-y-2 gap-x-3 md:mb-4 mb-5 md:text-base text-sm flex-wrap'>
          {project.technologies.map((tech) => (
            <p key={tech} className='text-sm text-gray-400'>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
