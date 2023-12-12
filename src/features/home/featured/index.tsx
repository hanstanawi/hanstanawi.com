'use client';
import Parallax from 'components/layouts/Parallax';
import SectionLayout from 'components/layouts/SectionLayout';
import ProjectsList from 'features/home/featured/components/ProjectsList';
import { useInView } from 'framer-motion';
import { animateInViewElement } from 'lib/animation.lib';
import { useRef } from 'react';

const FeaturedSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <SectionLayout id="featured" forwardedRef={ref}>
      <Parallax>
        <div className="my-14 w-full md:my-24">
          <div className="flex h-full flex-col justify-center">
            {/* TITLE */}
            <div
              className="mb-10 flex items-center gap-x-4 md:mb-14 md:gap-x-6 lg:gap-x-12 xl:gap-x-16"
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
              })}
            >
              <div className="h-[1px] w-9/12 bg-[#E5E5E5] dark:h-[0.5px] dark:bg-gray-300 md:w-9/12"></div>
              <h1 className="w-4/12 text-right text-2xl text-black dark:text-gray-300 sm:text-left sm:text-4xl md:w-2/12 xl:text-5xl">
                Projects
              </h1>
            </div>
            <ProjectsList />
          </div>
        </div>
      </Parallax>
    </SectionLayout>
  );
};

export default FeaturedSection;
