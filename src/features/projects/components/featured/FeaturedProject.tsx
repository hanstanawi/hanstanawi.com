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
        'flex items-center h-full w-11/12 gap-x-16',
        isOdd ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <Link href={project.demoUrl}>
        <a
          className='cursor-pointer w-8/12 relative flex items-center h-full'
          target={'_blank'}
        >
          <div
            className={cx(
              'absolute hover:opacity-0 opacity-20 from-black to-transparent transition duration-500 left-0 top-0 w-full z-10 h-full',
              isOdd ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
            )}
          ></div>
          <Image
            src={project.imageSrc}
            alt={project.id}
            width={1280}
            height={720}
            objectFit='cover'
            className='h-full'
          />
        </a>
      </Link>
      <div
        className={cx(
          'w-1/2 flex flex-col justify-start items-start'
          // isOdd ? 'items-start' : 'items-end'
        )}
      >
        <p className='text-tealGreen text-lg'>Featured Project</p>
        <Link href={project.demoUrl}>
          <a className='font-semibold text-black text-2xl mb-5' target='_blank'>
            {project.title}
          </a>
        </Link>
        <div className='rounded-sm w-11/12 mb-5'>
          <p>{project.description}</p>
        </div>
        <div className='flex gap-x-4 mb-5'>
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
