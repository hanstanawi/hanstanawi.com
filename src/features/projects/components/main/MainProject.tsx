import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { Project } from 'features/projects/projects.type';

type MainProjectItemProps = {
  project: Project;
  index: number;
};

const MainProjectItem = ({ project, index }: MainProjectItemProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={cx(
        'flex items-center relative h-full',
        isOdd ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div className='w-8/12'>
        <Image
          src={project.imageSrc}
          alt={project.id}
          width={1000}
          height={600}
          objectFit='cover'
        />
      </div>
      <div
        className={cx(
          'absolute z-10 w-1/2 flex flex-col justify-start',
          isOdd ? 'left-7 items-start' : 'right-7 items-end'
        )}
      >
        <p className='text-tealGreen text-lg'>Featured Project</p>
        <Link href={project.demoUrl}>
          <a className='font-semibold text-black text-2xl mb-5' target='_blank'>
            {project.title}
          </a>
        </Link>
        <div className='shadow-lg bg-white p-4 rounded-sm  border border-gray-100 w-10/12 mb-3'>
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
                className='text-black transition duration-500'
                size={23}
              />
            </a>
          </Link>
          <Link href={project.demoUrl}>
            <a target='_blank' className='cursor-pointer pt-0.5'>
              <FaExternalLinkAlt
                className='text-black transition duration-500'
                size={20}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainProjectItem;
