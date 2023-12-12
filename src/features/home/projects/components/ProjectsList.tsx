import Button from 'components/ui/Button';
import { otherProjects } from 'features/home/projects/projects.constant';
import { useMemo, useState } from 'react';

import ProjectItem from './ProjectItem';

function calculateDelay(index: number): number {
  return (index + 2) * 100; // add 100ms
}

const ProjectsList = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const shownProjects = useMemo(() => {
    if (isShowMore) return otherProjects;
    return otherProjects.slice(0, 6);
  }, [isShowMore]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:w-11/12 xl:grid-cols-3">
        {shownProjects.map((project, i) => (
          <ProjectItem
            key={project.id}
            project={project}
            delay={calculateDelay(i)}
          />
        ))}
      </div>
      <div className="mb-8 mt-16 flex justify-center">
        <Button
          sizeClasses="md:px-8 px-7 md:py-4 py-3 md:text-base text-sm"
          onClick={() => setIsShowMore((prevState) => !prevState)}
        >
          {isShowMore ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </>
  );
};

export default ProjectsList;
