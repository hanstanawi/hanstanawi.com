import Link from 'next/link';
import ProjectLinks from 'components/ProjectLinks';
import { Project } from 'types/projects.type';

type ContentProps = {
  project: Project;
};

const Content = ({ project }: ContentProps) => {
  return (
    <div className='xl:w-1/2 lg:w-8/12 md:w-11/12 w-full flex flex-col justify-start items-start'>
      <p className='text-tealGreen md:text-lg text-sm'>Featured Project</p>
      <Link href={project.demoUrl}>
        <a
          className='font-semibold text-black md:text-2xl text-xl md:mb-5 mb-3 mt-1.5'
          target='_blank'
        >
          {project.title}
        </a>
      </Link>
      <div className='rounded-sm md:mb-3 mb-5 break-words md:text-base text-sm'>
        <p>{project.description}</p>
      </div>
      <div className='flex md:gap-x-4 md:gap-y-0 gap-y-2 gap-x-3 md:mb-4 mb-5 md:text-base text-sm flex-wrap'>
        {project.technologies.map((tech) => (
          <p key={tech} className='text-sm text-gray-400'>
            {tech}
          </p>
        ))}
      </div>
      <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
    </div>
  );
};

export default Content;
