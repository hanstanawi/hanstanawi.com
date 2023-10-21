import dynamic from 'next/dynamic';
import Hero from 'features/home/hero';

const About = dynamic(() => import('features/home/about'));
const Experience = dynamic(() => import('features/home/experience'));
const Featured = dynamic(() => import('features/home/featured'));
const Projects = dynamic(() => import('features/home/projects'));
const Contact = dynamic(() => import('features/home/contact'));

const HomePage = () => {
  return (
    <div className="font-basic">
      <main>
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
