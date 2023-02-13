import { Experience } from './experience.type';

export const EXPERIENCES: Experience[] = [
  {
    id: 'lumina',
    company: 'Lumina',
    role: 'Full Stack Engineer',
    url: 'https://getlumina.com',
    startDate: '2021-11-15',
    endDate: null,
    description: `Lumina is a software and hardware technology company that builds beautifully
    integrated hardware to make remote work better.`,
    responsibilities: [
      `Lead, develop, and maintain Lumina Next.js landing page development,
    such as implement AB tests, analytics, and website performance.`,
      `Implement and maintain backend Lambda functions and webhooks
    using TypeScript.`,
      `Lead, develop, and maintain Lumina REST API using Node.js, NestJS,
    and PostgreSQL as backend API for Lumina Studio native application.`,
    ],
  },
  {
    id: 'molteo',
    company: 'Molteo',
    role: 'Frontend Engineer',
    url: 'https://molteo.com',
    startDate: '2020-05-31',
    endDate: '2021-11-01',
    description: `Molteo is a digital workspace, which provides real-time overview of projects
    and construction sites, flexible resource capturing, and paperless billing`,
    responsibilities: [
      `Write and maintain modern, performant, and robust code of Molteo
    Vue.js web application.`,
      `Implement thorough web application end-to-end tests using Cypress.`,
      `Collaborate with and assist the back-end team developing and maintaining APIs using Express/Feather.js and PostgreSQL`,
      `Assist the migration of the whole front-end codebase from JavaScript to
    TypeScript`,
    ],
  },
];
