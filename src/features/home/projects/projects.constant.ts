import { Project } from 'types/projects.type';

export const otherProjects: Omit<Project, 'imageSrc'>[] = [
  {
    id: 'milktab',
    title: 'milktab',
    description: `milktab is a supplement pill designed for lactose-intolerant people to digest dairy better. Built with Next 13, TypeScript, and TailwindCSS with Shopify API integration.`,
    githubUrl: null,
    demoUrl: 'https://milktab.co',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'nudge',
    title: 'Nudge',
    description: `Nudge is a comprehensive supplement to treat irritable bowel syndrome (IBS). Built with React, Next.js, TypeScript, and TailwindCSS with Stripe payment.`,
    githubUrl: null,
    demoUrl: 'https://nudgehealth.co',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'filmseeker-app',
    title: 'FilmSeeker',
    description: `FilmSeeker is actually my own fictional startup idea during my second year of college. A movie database web application where users can search for movies, create a watchlist, add ratings to the movies, etc. All movies data are supported by TMDB API.`,
    githubUrl: 'https://github.com/hanstanawi/filmseeker-webapp',
    demoUrl: 'https://filmseeker-webapp.vercel.app',
    technologies: ['Vue', 'JavaScript', 'Vuex', 'Vuetify'],
  },
  {
    id: 'contact-keeper',
    title: 'Contact Keeper',
    description:
      'Simple web app to manage personal contacts information. All apps are dockerized as Docker containers. Deployed and hosted in AWS S3 and EC2.',
    githubUrl: 'https://github.com/hanstanawi/contact-keeper-docker',
    demoUrl: 'http://contact-keeper-react.s3-website-us-west-2.amazonaws.com',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'Docker',
      'AWS',
      'MongoDB',
    ],
  },
  // {
  //   id: 'linkedout-backend',
  //   title: 'LinkedOut Backend API',
  //   description:
  //     'REST API built with Node.js, Express.js, Typescript and PostgreSQL to allow users to create, update profile as well as their work experiences deployed on Render.com',
  //   githubUrl: 'https://github.com/hanstanawi/linkedout-backend',
  //   demoUrl: 'https://filmseeker-api.onrender.com',
  //   technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
  // },
  {
    id: 'crypto-tracker',
    title: 'Crypto Tracker',
    description:
      'A web app to track most up-to-date cryptocurrencies prices. Cryptocurrencies data is supported by CryptoGecko API. Built with React, JavaScript, and Tailwind.',
    githubUrl: 'https://github.com/hanstanawi/crypto-tracker',
    demoUrl: 'https://crypto-tracker-beta-three.vercel.app/',
    technologies: ['React', 'JavaScript', 'TailwindCSS'],
  },
  // {
  //   id: 'filmseeker-backend',
  //   title: 'FilmSeeker Backend API',
  //   description:
  //     'Backend REST API for FilmSeeker web app. Built with Node.js, Express, and MongoDB with authentication. All movies data is supported by TMDB API.',
  //   githubUrl: 'https://github.com/hanstanawi/filmseeker-api',
  //   demoUrl: 'https://filmseeker-api.onrender.com',
  //   technologies: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
  // },
  {
    id: 'lumina-desk',
    title: 'Lumina Desk',
    description:
      'Lumina Desk landing page. Showcasing Lumina second major product, a smart desk optimized for home-office and remote work. Built with Next.js TypeScript, TailwindCSS and Framer Motion',
    githubUrl: null,
    demoUrl: 'http://getlumina.com/desk',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
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
];
