'use client';
import dynamic from 'next/dynamic';
import Hero from 'features/hero';

const About = dynamic(() => import('features/about'));
const Experience = dynamic(() => import('features/experience'));
const Featured = dynamic(() => import('features/featured'));
const Projects = dynamic(() => import('features/projects'));
const Contact = dynamic(() => import('features/contact'));

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
