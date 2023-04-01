import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Parallax from 'components/Parallax';
import SectionLayout from 'components/SectionLayout';
import ProjectsList from 'features/featured/components/ProjectsList';
import { animateInViewElement } from 'lib/animation.lib';

const FeaturedSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id='featured' ref={ref}>
      <SectionLayout>
        <Parallax>
          <div className='md:my-24 my-14 w-full'>
            <div className='flex flex-col justify-center h-full'>
              {/* TITLE */}
              <div
                className='flex items-center xl:gap-x-16 lg:gap-x-12 md:gap-x-6 gap-x-4 md:mb-14 mb-10'
                style={animateInViewElement(isInView, {
                  direction: 'translateY(30px)',
                  speed: 0.3,
                })}
              >
                <div className='dark:h-[0.5px] h-[1px] dark:bg-gray-300 bg-[#E5E5E5] md:w-9/12 w-9/12'></div>
                <h1 className='xl:text-5xl sm:text-4xl text-2x dark:text-gray-300 text-black sm:text-left text-right md:w-2/12 w-4/12'>
                  Projects
                </h1>
              </div>
              <ProjectsList />
            </div>
          </div>
        </Parallax>
      </SectionLayout>
    </section>
  );
};

export default FeaturedSection;
