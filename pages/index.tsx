import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from 'components/layout/Navbar';

import Footer from 'components/layout/Footer';
import Hero from 'features/hero';
import About from 'features/about';
import Experience from 'features/experience';
import Projects from 'features/projects';
import Contact from 'features/contact';
/**
 * - Setup ESLint and Prettier
 * - Add Navbar and Footer in Head component as wrapper
 * - Implement Hero section
 * - Import svg, png
 */
const Home: NextPage = () => {
  return (
    <div className='bg-white font-basic'>
      <Navbar />
      <main className='bg-white'>
        <Hero />
        <About />
        {/* <Experience />
        <Projects />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
