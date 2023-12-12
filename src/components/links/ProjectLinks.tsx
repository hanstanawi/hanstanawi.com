import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type ProjectLinksProps = {
  githubUrl: string | null;
  demoUrl: string;
};

const ProjectLinks = ({ githubUrl, demoUrl }: ProjectLinksProps) => {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden justify-end gap-x-4 md:flex">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="cursor-pointer"
            rel="noreferrer"
            aria-label="Github Repo"
          >
            <FaGithub
              className="text-black transition duration-500 dark:text-gray-300 md:hover:text-tealGreen"
              size={23}
            />
          </Link>
        )}
        <Link
          href={demoUrl}
          target="_blank"
          className="cursor-pointer pt-0.5"
          rel="noreferrer"
          aria-label="Project Demo"
        >
          <FaExternalLinkAlt
            className="text-black transition duration-500 dark:text-gray-300 md:hover:text-tealGreen"
            size={20}
          />
        </Link>
      </div>
      {/* MOBILE */}
      <div className="flex justify-end gap-x-4 md:hidden">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="cursor-pointer"
            rel="noreferrer"
            aria-label="Github Repo"
          >
            <FaGithub
              className="text-black transition duration-500 dark:text-gray-300 md:hover:text-tealGreen"
              size={20}
            />
          </Link>
        )}
        <Link
          href={demoUrl}
          target="_blank"
          className="cursor-pointer pt-0.5"
          aria-label="Project Demo"
        >
          <FaExternalLinkAlt
            className="text-black transition duration-500 dark:text-gray-300 md:hover:text-tealGreen"
            size={17}
          />
        </Link>
      </div>
    </>
  );
};

export default ProjectLinks;
