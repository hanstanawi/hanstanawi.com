import Parallax from 'components/Parallax';
import SectionLayout from 'components/SectionLayout';
import { useInView } from 'framer-motion';
import { animateInViewElement } from 'lib/animation.lib';
import { useRef } from 'react';
import Content from './components/Content';
import ProfileImage from './components/ProfileImage';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id='about' ref={ref}>
      <SectionLayout>
        <Parallax>
          <div className='md:mb-20 md:mt-10 mt-0 mb-10 w-full'>
            {/* TITLE */}
            <div
              className='flex items-center lg:gap-x-16 md:gap-x-10 sm:gap-x-6 gap-x-4 mb-6'
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
              })}
            >
              <div className='dark:h-[0.5px] h-[1px] dark:bg-gray-300 bg-[#E5E5E5] lg:w-1/2 md:w-10/12 w-3/4'></div>
              <h1 className='xl:text-5xl sm:text-4xl text-3xl dark:text-gray-300 text-black lg:w-1/2 md:w-2/12 w-1/4'>
                About
              </h1>
            </div>
            {/* CONTENT */}
            <div
              className='flex lg:flex-row flex-col lg:gap-x-16 gap-x-0 lg:gap-y-0 gap-y-8 lg:items-start items-center'
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
                delay: 300,
              })}
            >
              <ProfileImage isInView={isInView} />
              <Content />
            </div>
          </div>
        </Parallax>
      </SectionLayout>
    </section>
  );
};

export default About;
