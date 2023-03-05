import SectionLayout from 'components/SectionLayout';
import { useInView } from 'framer-motion';
import { animateInViewElement } from 'lib/animation.lib';
import { useRef } from 'react';
import ProjectsList from './components/ProjectsList';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section id='project' ref={ref}>
      <SectionLayout>
        <div className='md:h-[800px] h-[2080px] w-full flex flex-col justify-center'>
          {/* TITLE */}
          <div
            className='flex items-center justify-center mb-10'
            style={animateInViewElement(isInView, {
              speed: 0.3,
              direction: 'transformY(30px)',
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
      </SectionLayout>
    </section>
  );
};

export default Projects;
