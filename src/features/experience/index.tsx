import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLayout from 'components/SectionLayout';
import ExperienceTimeline from './components/ExperienceTimeline';
import { animateInViewElement } from 'lib/animation.lib';
import Parallax from 'components/Parallax';

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section id='experience' ref={ref}>
      <SectionLayout>
        <Parallax>
          <div className='h-[1100px] md:h-[1050px] w-full'>
            <div className='h-full flex flex-col justify-center'>
              <div
                className='flex items-center md:gap-x-1 md:mb-6 mb-2'
                style={animateInViewElement(isInView, {
                  direction: 'translateY(30px)',
                  speed: 0.3,
                })}
              >
                <h1 className='md:text-5xl text-2xl text-black w-8/12 md:w-5/12'>
                  Where I&apos;ve Worked
                </h1>
                <div className='h-[1px] bg-[#E5E5E5] w-4/12 md:w-7/12'></div>
              </div>
              <div
                className='flex justify-center pt-10'
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
