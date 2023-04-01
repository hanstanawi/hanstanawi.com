import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectLinksProps = {
  githubUrl: string | null;
  demoUrl: string;
};

const ProjectLinks = ({ githubUrl, demoUrl }: ProjectLinksProps) => {
  return (
    <>
      {/* DESKTOP */}
      <div className='md:flex hidden gap-x-4 justify-end'>
        {githubUrl && (
          <Link href={githubUrl}>
            <a target='_blank' className='cursor-pointer'>
              <FaGithub
                className='dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500'
                size={23}
              />
            </a>
          </Link>
        )}
        <Link href={demoUrl}>
          <a target='_blank' className='cursor-pointer pt-0.5'>
            <FaExternalLinkAlt
              className='dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500'
              size={20}
            />
          </a>
        </Link>
      </div>
      {/* MOBILE */}
      <div className='md:hidden flex gap-x-4 justify-end'>
        {githubUrl && (
          <Link href={githubUrl}>
            <a target='_blank' className='cursor-pointer'>
              <FaGithub
                className='dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500'
                size={20}
              />
            </a>
          </Link>
        )}
        <Link href={demoUrl}>
          <a target='_blank' className='cursor-pointer pt-0.5'>
            <FaExternalLinkAlt
              className='dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500'
              size={17}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
