import cx from 'classnames';
import { useState } from 'react';
import { GoKeyboard } from 'react-icons/go';
import { motion } from 'framer-motion';
import ProjectLinks from 'components/ProjectLinks';
import { Project } from 'types/projects.type';

type ProjectItemProps = {
  project: Omit<Project, 'imageSrc'>;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='flex flex-col justify-start items-center px-8 py-10 border border-gray-200 rounded-md shadow-lg cursor-pointer'
      whileHover={{ y: '-10px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className='flex justify-between w-full mb-8 items-center'>
        <GoKeyboard size={40} className='text-tealGreen' />
        <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
      <div className='flex flex-col gap-y-4'>
        <h3
          className={cx(
            'font-semibold text-xl transition duration-150',
            isHovered ? 'text-tealGreen' : 'text-black'
          )}
        >
          {project.title}
        </h3>
        <p className='text-sm'>{project.description}</p>
        <div className='flex md:gap-x-4 md:gap-y-2 gap-y-2 gap-x-3 md:mb-4 mb-5 md:text-base text-sm flex-wrap'>
          {project.technologies.map((tech) => (
            <p key={tech} className='text-sm text-gray-400'>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
