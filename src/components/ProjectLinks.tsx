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
      <div className="md:flex hidden gap-x-4 justify-end">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="cursor-pointer"
            rel="noreferrer"
          >
            <FaGithub
              className="dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500"
              size={23}
            />
          </Link>
        )}
        <Link
          href={demoUrl}
          target="_blank"
          className="cursor-pointer pt-0.5"
          rel="noreferrer"
        >
          <FaExternalLinkAlt
            className="dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500"
            size={20}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="md:hidden flex gap-x-4 justify-end">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="cursor-pointer"
            rel="noreferrer"
          >
            <FaGithub
              className="dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500"
              size={20}
            />
          </Link>
        )}
        <Link href={demoUrl} target="_blank" className="cursor-pointer pt-0.5">
          <FaExternalLinkAlt
            className="dark:text-gray-300 text-black md:hover:text-tealGreen transition duration-500"
            size={17}
          />
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
