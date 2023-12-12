import { cn } from 'lib/utils.lib';
import Image from 'next/legacy/image';
import Link from 'next/link';
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
      className={cn(
        'absolute left-0 top-0 z-10 hidden h-full w-full rounded-md from-black to-transparent opacity-20 transition duration-500 md:block md:hover:opacity-0',
        isOdd ? 'bg-gradient-to-l' : 'bg-gradient-to-r',
      )}
    ></div>
  );
};

const ProjectImage = ({ project }: ProjectImageProps) => {
  return (
    <Link
      href={project.demoUrl}
      className="relative flex h-full w-full cursor-pointer items-center md:w-11/12 lg:w-9/12 xl:w-8/12"
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
