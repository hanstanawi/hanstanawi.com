import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import SectionLayout from 'components/SectionLayout';
import Parallax from 'components/Parallax';
import Circles from 'public/assets/circles.svg';
import { animateInViewElement } from 'lib/animation.lib';

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section id="contact" ref={ref} className="relative">
      <SectionLayout>
        <Parallax>
          <div className="h-[450px] md:h-[600px] w-full">
            <div
              className="flex flex-col h-full justify-center items-center md:gap-y-7 gap-y-4"
              style={animateInViewElement(isInView, {
                direction: 'translateY(30px)',
                speed: 0.3,
              })}
            >
              <h1 className="lg:text-5xl z-40 md:text-4xl text-3xl text-center font-semibold dark:text-gray-300 text-black">
                Get In Touch
              </h1>
              <div className="md:text-xl text-sm text-center dark:text-gray-300 text-gray-500 lg:w-7/12 md:w-9/12 w-full font-light mb-3 z-50">
                <h4 className="mb-1">
                  I&apos;m currently open to new exciting opportunities globally
                  and open-source projects collaboration. Don&apos;t hesitate to
                  reach me or just say hi.<br></br>
                </h4>
                <h4>My inbox is always open!</h4>
              </div>
              <Link
                href={'mailto:hanstanawi@gmail.com'}
                className="dark:border-tealGreen z-50 border-black border md:py-4 md:px-12 py-3 px-8 md:text-lg text-sm rounded-md 
                md:hover:text-white md:hover:bg-black transition duration-300 dark:text-tealGreen text-black
                dark:md:hover:text-white dark:md:hover:bg-tealGreen dark:md:hover:bg-opacity-20"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div
            className="dark:hidden lg:block hidden absolute -top-16 left-32 opacity-50"
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
