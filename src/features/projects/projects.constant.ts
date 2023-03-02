import { Project } from 'types/projects.type';

export const otherProjects: Omit<Project, 'imageSrc'>[] = [
  {
    id: 'contact-keeper',
    title: 'Contact Keeper',
    description:
      'Recreate Contact Keeper app from Brad Traversy course project. All code are re-written in TypeScript and dockerized as Docker containers. Deployed and hosted in AWS S3 and EC2.',
    githubUrl: 'https://github.com/hanstanawi/splitter-app',
    demoUrl: 'http://splitter-app-mu.vercel.app',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
  },
  {
    id: 'linkedout-backend',
    title: 'LinkedOut Backend API',
    description:
      'REST API built with Node.js, Express.js, Typescript and PostgreSQL to allow users to create, update profile as well as their work experiences deployed on Render.com',
    githubUrl: 'https://github.com/hanstanawi/linkedout-backend',
    demoUrl: 'https://crypto-tracker-beta-three.vercel.app/',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Tracker',
    description:
      'Crypto Tracker is a simple app to view and track Cryptocurrencies data',
    githubUrl: 'https://github.com/hanstanawi/crypto-tracker',
    demoUrl: 'https://crypto-tracker-beta-three.vercel.app/',
    technologies: ['React', 'JavaScript', 'TailwindCSS'],
  },
  {
    id: 'filmseeker-backend',
    title: 'FilmSeeker Backend API',
    description:
      'Simple web app to split bills and calculate tip built with React, TypeScript and Styled Components',
    githubUrl: 'https://github.com/hanstanawi/filmseeker-api',
    demoUrl: 'http://splitter-app-mu.vercel.app',
    technologies: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
  },
  {
    id: 'splitter-app',
    title: 'Splitter',
    description:
      'Simple web app to split bills and calculate tip built with React, TypeScript and Styled Components',
    githubUrl: 'https://github.com/hanstanawi/splitter-app',
    demoUrl: 'http://splitter-app-mu.vercel.app',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
  },
  {
    id: 'lumina-desk',
    title: 'Lumina Desk',
    description:
      'Simple web app to split bills and calculate tip built with React, TypeScript and Styled Components',
    githubUrl: null,
    demoUrl: 'http://getlumina.com/desk',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
];
