import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';

import Hero from 'features/hero';
import About from 'features/about';
import Experience from 'features/experience';
import Featured from 'features/featured';
import Projects from 'features/projects';
import Contact from 'features/contact';

import { createSeoConfig } from 'lib/seo.lib';
import { homepageSeo } from 'constants/seo.constant';

const Home: NextPage = () => {
  const homeSeoConfig = createSeoConfig({ ...homepageSeo });
  return (
    <>
      <NextSeo {...homeSeoConfig} />
      <div className='font-basic lg:scroll-smooth'>
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
