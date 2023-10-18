import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';

import Hero from 'features/hero';

const About = dynamic(() => import('features/about'));
const Experience = dynamic(() => import('features/experience'));
const Featured = dynamic(() => import('features/featured'));
const Projects = dynamic(() => import('features/projects'));
const Contact = dynamic(() => import('features/contact'));

import { createSeoConfig } from 'lib/seo.lib';
import { homepageSeo } from 'constants/seo.constant';

const Home: NextPage = () => {
  const homeSeoConfig = createSeoConfig({ ...homepageSeo });
  return (
    <>
      <NextSeo {...homeSeoConfig} />
      <div className="font-basic lg:scroll-smooth">
        <main>
          <Hero />
          <About />
          <Experience />
          <Featured />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
