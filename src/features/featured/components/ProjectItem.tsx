import cx from 'classnames';
import ProjectContent from './Content';
import ProjectImage from './ProjectImage';
import { Project } from 'types/projects.type';

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
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

export default ProjectItem;