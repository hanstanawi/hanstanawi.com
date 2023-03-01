import type { NextPage } from 'next';

import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import Hero from 'features/hero';
import About from 'features/about';
import Experience from 'features/experience';
import Featured from 'features/featured';
import Contact from 'features/contact';
import Projects from 'features/projects';

const Home: NextPage = () => {
  return (
    <div className='bg-white font-basic'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
