'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Button from 'components/ui/Button';
import SectionLayout from 'components/layouts/SectionLayout';
import SocialLinks from 'components/links/SocialLinks';
import Circles from 'public/assets/circles.svg';
import Parallax from 'components/layouts/Parallax';
import useMediaQuery from 'hooks/use-media-query';
import { animateInViewElement } from 'lib/animation.lib';
import Link from 'next/link';

const SUBTITLE = `I'm a full stack engineer specializing building things for web
and based in Taipei, Taiwan`;

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery('(max-width: 768px)');

  const initialDelay = isMobile ? 0 : 4;

  const firstTitle = (
    <p className="dark:text-tealGreen text-gray-500 md:text-xl text-lg font-light pb-2">
      Hi, my name is
    </p>
  );

  const secondTitle = (
    <h1 className="dark:text-gray-300 text-black lg:text-7xl md:text-6xl text-5xl">
      Hans Tanawi.
    </h1>
  );

  const subtitle = (
    <h2 className="dark:text-gray-400 text-black lg:text-3xl md:text-2xl text-xl font-light xl:w-2/3 md:w-9/12 w-11/12 md:pb-4 pb-1">
      {SUBTITLE}
    </h2>
  );

  const cta = (
    <div className="flex flex-col gap-y-2">
      <SocialLinks />
      <Link href={'/#featured'}>
        <Button sizeClasses="md:px-8 px-7 md:py-4 py-3 md:text-base text-sm">
          Check out my projects
        </Button>
      </Link>
    </div>
  );

  const items = [firstTitle, secondTitle, subtitle, cta];

  return (
    <SectionLayout id="hero" forwardedRef={ref}>
      <Parallax offset={0}>
        <div className="h-[100vh] flex flex-col justify-center items-start gap-y-2 pt-14">
          {items.map((item, i) => (
            <div
              key={i}
              style={animateInViewElement(isInView, {
                direction: 'translateY(20px)',
                speed: 0.3,
                delay: (i + initialDelay) * 200,
              })}
              className="z-10"
            >
              {item}
            </div>
          ))}
        </div>
      </Parallax>
      <div
        className="dark:hidden lg:block hidden absolute top-0 -right-32"
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
  );
};

export default Hero;
