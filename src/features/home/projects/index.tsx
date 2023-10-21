'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Parallax from 'components/layouts/Parallax';
import ProjectsList from './components/ProjectsList';
import SectionLayout from 'components/layouts/SectionLayout';
import { animateInViewElement } from 'lib/animation.lib';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <SectionLayout id="project" forwardedRef={ref}>
      <Parallax>
        <div className="flex w-full flex-col justify-center">
          {/* TITLE */}
          <div
            className="mb-10 flex items-center justify-center"
            style={animateInViewElement(isInView, {
              direction: 'transformY(30px)',
              speed: 0.3,
            })}
          >
            <h1 className="text-center text-xl font-semibold text-black dark:text-gray-300 md:text-2xl">
              Other Noteworthy Projects
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ProjectsList />
          </div>
        </div>
      </Parallax>
    </SectionLayout>
  );
};

export default Projects;
