'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import SectionLayout from 'components/layouts/SectionLayout';
import Parallax from 'components/layouts/Parallax';
import Circles from 'public/assets/circles.svg';
import { animateInViewElement } from 'lib/animation.lib';

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section id="contact" ref={ref} className="relative">
      <SectionLayout>
        <Parallax>
          <div className="h-[450px] w-full md:h-[600px]">
            <div
              className="flex h-full flex-col items-center justify-center gap-y-4 md:gap-y-7"
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
              })}
            >
              <h1 className="z-40 text-center text-3xl font-semibold text-black dark:text-gray-300 md:text-4xl lg:text-5xl">
                Get In Touch
              </h1>
              <div className="z-50 mb-3 w-full text-center text-sm font-light text-gray-500 dark:text-gray-300 md:w-9/12 md:text-xl lg:w-7/12">
                <p className="mb-1">
                  I&apos;m currently open to new exciting opportunities globally
                  and open-source projects collaboration. Don&apos;t hesitate to
                  reach me or just say hi.<br></br>
                </p>
                <p>My inbox is always open!</p>
              </div>
              <Link
                href={'mailto:hanstanawi@gmail.com'}
                className="z-50 rounded-md border border-black px-8 py-3 text-sm text-black transition duration-300 dark:border-tealGreen 
                dark:text-tealGreen md:px-12 md:py-4 md:text-lg md:hover:bg-black md:hover:text-white
                dark:md:hover:bg-tealGreen dark:md:hover:bg-opacity-20 dark:md:hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div
            className="absolute -top-16 left-32 hidden opacity-50 dark:hidden lg:block"
            style={{ transform: 'scaleX(-1)' }}
          >
            <Circles />
          </div>
        </Parallax>
      </SectionLayout>
    </section>
  );
};

export default Contact;
