import ProjectLinks from 'components/links/ProjectLinks';
import Link from 'next/link';
import { Project } from 'types/projects.type';

type ContentProps = {
  project: Project;
};

const Content = ({ project }: ContentProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-start md:w-11/12 lg:w-8/12 xl:w-1/2">
      <p className="text-sm text-tealGreen lg:text-lg">Featured Project</p>
      <Link
        href={project.demoUrl}
        className="mb-3 mt-1.5 text-xl font-semibold text-black dark:text-gray-300 md:mb-5 lg:text-2xl"
        target="_blank"
        rel="noreferrer"
        aria-label={project.title}
      >
        {project.title}
      </Link>
      <div className="mb-5 break-words rounded-sm text-sm text-black dark:text-gray-400 md:mb-3 md:text-base">
        <p>{project.description}</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-x-3 gap-y-2 text-sm md:mb-4 md:gap-x-4 md:gap-y-0 md:text-base">
        {project.technologies.map((tech) => (
          <p key={tech} className="text-sm text-gray-400">
            {tech}
          </p>
        ))}
      </div>
      <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
    </div>
  );
};

export default Content;
