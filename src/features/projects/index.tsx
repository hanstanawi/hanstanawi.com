import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Parallax from 'components/Parallax';
import ProjectsList from './components/ProjectsList';
import SectionLayout from 'components/SectionLayout';
import { animateInViewElement } from 'lib/animation.lib';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section id='project' ref={ref}>
      <SectionLayout>
        <Parallax>
          <div className='w-full flex flex-col justify-center'>
            {/* TITLE */}
            <div
              className='flex items-center justify-center mb-10'
              style={animateInViewElement(isInView, {
                direction: 'transformY(30px)',
                speed: 0.3,
              })}
            >
              <h1 className='md:text-2xl text-xl font-semibold text-center'>
                Other Noteworthy Projects
              </h1>
            </div>
            <div className='flex justify-center'>
              <ProjectsList />
            </div>
          </div>
        </Parallax>
      </SectionLayout>
    </section>
  );
};

export default Projects;
