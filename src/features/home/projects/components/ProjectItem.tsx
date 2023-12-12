import ProjectLinks from 'components/links/ProjectLinks';
import { motion, useInView } from 'framer-motion';
import useMediaQuery from 'hooks/use-media-query';
import { animateInViewElement } from 'lib/animation.lib';
import { cn } from 'lib/utils.lib';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { RxKeyboard } from 'react-icons/rx';
import type { Project } from 'types/projects.type';

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
        className="flex flex-col items-center justify-start rounded-md border border-gray-200 p-8 shadow-lg dark:border-transparent dark:bg-dark"
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
        <div className="mb-5 flex w-full items-center justify-between md:mb-8">
          <RxKeyboard size={40} className="hidden text-tealGreen md:block" />
          <RxKeyboard size={35} className="block text-tealGreen md:hidden" />
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
            className={cn(
              'text-lg font-semibold transition duration-150 md:text-xl',
              isHovered ? 'text-tealGreen' : 'text-black dark:text-gray-300',
            )}
          >
            {project.title}
          </Link>
          <p className="mb-4 text-[13px] text-black dark:text-gray-300 md:text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-[13px] md:gap-x-3 md:gap-y-2 md:text-base">
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
