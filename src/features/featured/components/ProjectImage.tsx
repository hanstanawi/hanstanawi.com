import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { Project } from 'types/projects.type';

type ProjectImageProps = {
  isOdd: boolean;
  project: Project;
};

type OverlayProps = {
  isOdd: boolean;
};

const Overlay = ({ isOdd }: OverlayProps) => {
  return (
    <div
      className={cx(
        'md:block hidden absolute md:hover:opacity-0 opacity-20 from-black to-transparent transition rounded-md duration-500 left-0 top-0 w-full z-10 h-full',
        isOdd ? 'bg-gradient-to-l' : 'bg-gradient-to-r',
      )}
    ></div>
  );
};

const ProjectImage = ({ project }: ProjectImageProps) => {
  return (
    <Link
      href={project.demoUrl}
      className="cursor-pointer xl:w-8/12 lg:w-9/12 md:w-11/12 w-full relative flex items-center h-full"
      target={'_blank'}
    >
      <Image
        src={project.imageSrc}
        alt={project.id}
        width={1450}
        height={770}
        className="h-full rounded-md"
        placeholder="blur"
        blurDataURL={`/_next/image?url=${String(project.imageSrc)}&w=16&q=1`}
      />
    </Link>
  );
};

export default ProjectImage;
