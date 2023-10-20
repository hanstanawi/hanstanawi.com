import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { RxKeyboard } from 'react-icons/rx';
import { motion, useInView } from 'framer-motion';

import useMediaQuery from 'hooks/use-media-query';
import ProjectLinks from 'components/links/ProjectLinks';
import { Project } from 'types/projects.type';
import { animateInViewElement } from 'lib/animation.lib';
import Link from 'next/link';

type ProjectItemProps = {
  project: Omit<Project, 'imageSrc'>;
  delay: number;
};

const ProjectItem = ({ project, delay }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  // DIRTY LOL
  const [nativeDelay, setNativeDelay] = useState(delay);
  const [speed, setSpeed] = useState(0.3);

  useEffect(() => {
    if (isHovered) {
      setNativeDelay(0);
      setSpeed(0);
    }
  }, [isHovered]);

  const handleSetHover = (state: boolean) => {
    if (!isMobile) setIsHovered(state);
  };

  const handleRedirectToDemoApp = () => {
    window.open(project.demoUrl, '_blank');
  };
  return (
    <>
      <motion.div
        className="flex flex-col justify-start items-center p-8 border dark:border-transparent border-gray-200 rounded-md shadow-lg dark:bg-dark"
        whileHover={{ y: isMobile ? '0px' : '-10px' }}
        onHoverStart={() => handleSetHover(true)}
        onHoverEnd={() => handleSetHover(false)}
        ref={ref}
        style={animateInViewElement(isInView, {
          direction: 'translateY(50px)',
          speed,
          delay: nativeDelay,
        })}
      >
        <div className="flex justify-between w-full md:mb-8 mb-5 items-center">
          <RxKeyboard size={40} className="text-tealGreen md:block hidden" />
          <RxKeyboard size={35} className="text-tealGreen md:hidden block" />
          <ProjectLinks
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className={cx(
              'font-semibold md:text-xl text-lg transition duration-150',
              isHovered ? 'text-tealGreen' : 'dark:text-gray-300 text-black',
            )}
          >
            {project.title}
          </Link>
          <p className="md:text-sm text-[13px] mb-4 dark:text-gray-300 text-black">
            {project.description}
          </p>
          <div className="flex md:gap-x-3 md:gap-y-2 gap-y-2 gap-x-3 md:text-base text-[13px] flex-wrap">
            {project.technologies.map((tech) => (
              <p key={tech} className="text-sm text-gray-400">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
