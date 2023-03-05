import { useRef } from 'react';
import { useInView } from 'framer-motion';

import SectionLayout from 'components/SectionLayout';
import ProjectsList from 'features/featured/components/ProjectsList';
import { animateInViewElement } from 'lib/animation.lib';

const FeaturedSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id='featured' ref={ref}>
      <SectionLayout>
        <div className='h-[2000px] md:h-[1900px] w-full'>
          <div className='flex flex-col justify-center h-full'>
            {/* TITLE */}
            <div
              className='flex items-center md:gap-x-16 gap-x-4 md:mb-14 mb-10'
              style={animateInViewElement(isInView, {
                direction: 'translateY(50px)',
                speed: 0.6,
              })}
            >
              <div className='h-[1px] bg-[#E5E5E5] md:w-10/12 w-8/12'></div>
              <h1 className='md:text-5xl text-3xl text-black text-right md:w-2/12 w-4/12'>
                Projects
              </h1>
            </div>
            <ProjectsList />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default FeaturedSection;
