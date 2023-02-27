import cx from 'classnames';
import { Project } from 'features/projects/projects.type';
import ProjectContent from './ProjectContent';
import ProjectImage from './ProjectImage';

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
      <ProjectImage isOdd={isOdd} project={project} />
      <ProjectContent project={project} />
    </div>
  );
};

export default FeaturedProject;
