'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLayout from 'components/layouts/SectionLayout';
import ExperienceTimeline from './components/ExperienceTimeline';
import { animateInViewElement } from 'lib/animation.lib';
import Parallax from 'components/layouts/Parallax';

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section id="experience" ref={ref}>
      <SectionLayout>
        <Parallax>
          <div className="my-14 w-full md:my-24">
            <div className="flex h-full flex-col justify-center">
              <div
                className="mb-2 flex items-center md:mb-6 md:gap-x-1"
                style={animateInViewElement(isInView, {
                  direction: 'translateY(30px)',
                  speed: 0.3,
                })}
              >
                <h1 className="w-8/12 text-2xl text-black dark:text-gray-300 sm:text-3xl lg:w-5/12 lg:text-4xl xl:text-5xl">
                  Where I&apos;ve Worked
                </h1>
                <div className="h-[1px] w-4/12 bg-[#E5E5E5] dark:h-[0.5px] dark:bg-gray-300 lg:w-7/12"></div>
              </div>
              <div
                className="flex justify-center pt-10"
                style={animateInViewElement(isInView, {
                  direction: 'translateY(30px)',
                  speed: 0.3,
                  delay: 300,
                })}
              >
                {/* TABS */}
                <ExperienceTimeline />
              </div>
            </div>
          </div>
        </Parallax>
      </SectionLayout>
    </section>
  );
};

export default Experience;
