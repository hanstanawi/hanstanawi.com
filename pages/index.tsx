import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// import Navbar from 'components/navigation/Navbar';

import Footer from 'components/navigation/Footer';
import Hero from 'features/hero';
import About from 'features/about';
import Experience from 'features/experience';
import Projects from 'features/projects';
import Contact from 'features/contact';

const Navbar = dynamic(() => import('components/navigation/Navbar'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className='bg-white font-basic'>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Experience />
        <Projects />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
