import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link as SmoothScrollLink } from 'react-scroll';
import Button from 'components/Button';
import SectionLayout from 'components/SectionLayout';
import SocialLinks from 'components/SocialLinks';
import Circles from 'public/images/circles.svg';
import Parallax from 'components/Parallax';
import useMediaQuery from 'hooks/use-media-query';
import { animateInViewElement } from 'lib/animation.lib';

const SUBTITLE = `I'm a full stack engineer specializing building things for web
and based in Taipei, Taiwan`;

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery('(max-width: 768px)');

  const initialDelay = isMobile ? 0 : 4;

  const firstTitle = (
    <p className='dark:text-tealGreen text-gray-500 md:text-xl text-lg font-light pb-2'>
      Hi, my name is
    </p>
  );

  const secondTitle = (
    <h1 className='dark:text-gray-300 text-black lg:text-7xl md:text-6xl text-5xl'>
      Hans Tanawi.
    </h1>
  );

  const subtitle = (
    <h3 className='dark:text-gray-400 text-black lg:text-3xl md:text-2xl text-xl font-light xl:w-2/3 md:w-9/12 w-11/12 md:pb-4 pb-1'>
      {SUBTITLE}
    </h3>
  );

  const cta = (
    <div className='flex flex-col gap-y-2'>
      <SocialLinks />
      <SmoothScrollLink
        to={'featured'}
        smooth={true}
        duration={700}
        offset={-20}
      >
        <Button sizeClasses='md:px-8 px-7 md:py-4 py-3 md:text-base text-sm'>
          Check out my projects
        </Button>
      </SmoothScrollLink>
    </div>
  );

  const items = [firstTitle, secondTitle, subtitle, cta];

  return (
    <section id='hero' ref={ref}>
      <SectionLayout>
        <Parallax offset={0}>
          <div className='h-[100vh] flex flex-col justify-center items-start gap-y-2 pt-14'>
            {items.map((item, i) => (
              <div
                key={i}
                style={animateInViewElement(isInView, {
                  direction: 'translateY(20px)',
                  speed: 0.3,
                  delay: (i + initialDelay) * 200,
                })}
                className='z-10'
              >
                {item}
              </div>
            ))}
          </div>
        </Parallax>
        <div
          className='dark:hidden lg:block hidden absolute top-0 -right-32'
          style={animateInViewElement(isInView, {
            direction: 'translateY(0px)',
            speed: 1,
            delay: 1400,
            opacity: 0.5,
          })}
        >
          <Circles />
        </div>
      </SectionLayout>
    </section>
  );
};

export default Hero;
