import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from 'features/projects/projects.type';

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
        isOdd ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
      )}
    ></div>
  );
};

const ProjectImage = ({ isOdd, project }: ProjectImageProps) => {
  return (
    <Link href={project.demoUrl}>
      <a
        className='cursor-pointer md:w-8/12 w-full relative flex items-center h-full'
        target={'_blank'}
      >
        {/* <Overlay isOdd={isOdd} /> */}
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
  );
};

export default ProjectImage;
