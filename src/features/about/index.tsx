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
          <div className='h-[1000px] md:h-[750px] w-full'>
            {/* TITLE */}
            <div
              className='flex items-center md:gap-x-16 gap-x-4 mb-6'
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
              })}
            >
              <div className='h-[1px] bg-[#E5E5E5] md:w-1/2 w-3/4'></div>
              <h1 className='md:text-5xl text-3xl text-black md:w-1/2 w-1/4'>
                About
              </h1>
            </div>
            {/* CONTENT */}
            <div
              className='flex md:flex-row flex-col md:gap-x-16 gap-x-0 md:gap-y-0 gap-y-8 items-start'
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
    </section>
  );
};

export default About;
