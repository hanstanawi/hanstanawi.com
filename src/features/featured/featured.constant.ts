import { Project } from 'types/projects.type';

export const projects: Project[] = [
  {
    id: 'order-book-app',
    title: 'Order Book App',
    description:
      'Order Book web application using Websocket built with React, TypeScript, and Redux Toolkit to view realtime orderbook bid and ask price data.',
    githubUrl: 'https://github.com/hanstanawi/order-book-app',
    demoUrl: 'https://order-book-app.vercel.app/',
    technologies: ['React', 'Redux', 'TypeScript', 'Websocket', 'TailwindCSS'],
    imageSrc: '/images/order_book_app.png',
  },
  {
    id: 'linkedout-app',
    title: 'LinkedOut',
    description: `LinkedOut is a simple fictional app that mimics LinkedIn functionalities, built using React.js, TypeScript, and TailwindCSS to view, add, update users' work experiences profile.`,
    githubUrl: 'https://github.com/hanstanawi/linkedout-app',
    demoUrl: 'https://work-experience-app.vercel.app',
    technologies: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'Vite'],
    imageSrc: '/images/linkedout_app.png',
  },
  {
    id: 'filmseeker',
    title: 'FilmSeeker',
    description: `FilmSeeker is actually my own fictional startup idea during my second year of college. It's a web application where users can search for movies, add them to a watchlist, add ratings to the movies, etc.`,
    githubUrl: 'https://github.com/hanstanawi/filmseeker-webapp',
    demoUrl: 'https://filmseeker-webapp.vercel.app',
    technologies: ['Vue', 'JavaScript', 'Vuex', 'Vuetify'],
    imageSrc: '/images/filmseeker_app.png',
  },
  {
    id: 'lumina-landing',
    title: 'Lumina Landing Page',
    description: `FilmSeeker is actually my own fictional startup idea during my second year of college. It's a web application where users can search for movies, add them to a watchlist, add ratings to the movies, etc.`,
    githubUrl: null,
    demoUrl: 'https://getlumina.com',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    imageSrc: '/images/lumina_landing_page.png',
  },
];