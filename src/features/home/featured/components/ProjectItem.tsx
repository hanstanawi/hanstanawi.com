import { useInView } from 'framer-motion';
import { animateInViewElement } from 'lib/animation.lib';
import { cn } from 'lib/utils.lib';
import { useRef } from 'react';
import type { Project } from 'types/projects.type';

import ProjectContent from './Content';
import ProjectImage from './ProjectImage';

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center gap-x-16 gap-y-6 lg:w-11/12 lg:gap-y-0',
        isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse',
      )}
      ref={ref}
      style={animateInViewElement(isInView, {
        direction: 'translateY(30px)',
        speed: 0.3,
        delay: 50,
      })}
    >
      <ProjectImage isOdd={isOdd} project={project} />
      <ProjectContent project={project} />
    </div>
  );
};

export default ProjectItem;
