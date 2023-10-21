'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Content from './components/Content';
import Parallax from 'components/layouts/Parallax';
import SectionLayout from 'components/layouts/SectionLayout';
import ProfileImage from './components/ProfileImage';
import { animateInViewElement } from 'lib/animation.lib';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionLayout id="about" forwardedRef={ref}>
      <Parallax>
        <div className="mb-10 mt-0 w-full md:mb-20 md:mt-10">
          {/* TITLE */}
          <div
            className="mb-6 flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-16"
            style={animateInViewElement(isInView, {
              direction: 'translateY(30px)',
              speed: 0.3,
            })}
          >
            <div className="h-[1px] w-3/4 bg-[#E5E5E5] dark:h-[0.5px] dark:bg-gray-300 md:w-10/12 lg:w-1/2"></div>
            <h1 className="w-1/4 text-3xl text-black dark:text-gray-300 sm:text-4xl md:w-2/12 lg:w-1/2 xl:text-5xl">
              About
            </h1>
          </div>
          {/* CONTENT */}
          <div
            className="flex flex-col items-center gap-x-0 gap-y-8 lg:flex-row lg:items-start lg:gap-x-16 lg:gap-y-0"
            style={animateInViewElement(isInView, {
              direction: 'translateY(30px)',
              speed: 0.3,
              delay: 300,
            })}
          >
            <ProfileImage />
            <Content />
          </div>
        </div>
      </Parallax>
    </SectionLayout>
  );
};

export default About;
