import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from 'features/projects/projects.type';

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={cx(
        'flex items-center h-full md:w-11/12 w-full gap-x-16 flex-col md:gap-y-0 gap-y-6',
        isOdd ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <Link href={project.demoUrl}>
        <a
          className='cursor-pointer md:w-8/12 w-full relative flex items-center h-full'
          target={'_blank'}
        >
          <div
            className={cx(
              'absolute md:hover:opacity-0 opacity-20 from-black to-transparent transition rounded-md duration-500 left-0 top-0 w-full z-10 h-full',
              isOdd ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
            )}
          ></div>
          <Image
            src={project.imageSrc}
            alt={project.id}
            width={1280}
            height={720}
            objectFit='cover'
            className='h-full rounded-md'
          />
        </a>
      </Link>
      <div className='md:w-1/2 w-full flex flex-col justify-start items-start'>
        <p className='text-tealGreen md:text-lg text-sm'>Featured Project</p>
        <Link href={project.demoUrl}>
          <a
            className='font-semibold text-black md:text-2xl text-xl md:mb-5 mb-3'
            target='_blank'
          >
            {project.title}
          </a>
        </Link>
        <div className='rounded-sm md:mb-3 mb-5 break-words md:text-base text-sm'>
          <p>{project.description}</p>
        </div>
        <div className='flex gap-x-4 md:mb-3 mb-5 md:text-base text-sm flex-wrap'>
          {project.technologies.map((tech) => (
            <p key={tech} className='text-sm text-gray-400'>
              {tech}
            </p>
          ))}
        </div>
        <div className='flex gap-x-4 justify-end'>
          <Link href={project.githubUrl}>
            <a target='_blank' className='cursor-pointer'>
              <FaGithub
                className='text-black md:hover:text-tealGreen transition duration-500'
                size={23}
              />
            </a>
          </Link>
          <Link href={project.demoUrl}>
            <a target='_blank' className='cursor-pointer pt-0.5'>
              <FaExternalLinkAlt
                className='text-black md:hover:text-tealGreen transition duration-500'
                size={20}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
