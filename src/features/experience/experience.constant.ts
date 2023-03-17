import { Experience } from './experience.type';

export const EXPERIENCES: Experience[] = [
  {
    id: 'lumina',
    company: 'Lumina',
    role: 'Full Stack Engineer',
    location: 'Taipei, Taiwan',
    url: 'https://getlumina.com',
    startDate: '2021-11-15',
    endDate: null,
    description: `Lumina is a software and hardware technology company that builds beautifully
    integrated hardware to make remote work better. 
    As the web team lead in Lumina, I'm responsible for Lumina e-commerce landing page and backend API services.`,
    responsibilities: [
      `Lead, develop, and maintain Lumina Next.js e-commerce landing page development.`,
      `Implement AB tests periodically to enhance landing page conversion rate.`,
      `Increase the website performance by 30%.`,
      `Lead and implement the migration process from serverless services to full backend API service.`,
      `Architect, develop, and maintain Lumina backend APIs with Node.js, NestJS,
    and PostgreSQL as backend API for Lumina Studio native application.`,
    ],
  },
  {
    id: 'molteo',
    company: 'Molteo',
    role: 'Frontend Engineer',
    location: 'Schleswig, Germany (Remote)',
    url: 'https://molteo.com',
    startDate: '2020-05-31',
    endDate: '2021-11-01',
    description: `Molteo is a digital workspace, which provides real-time overview of projects
    and construction sites, flexible resource capturing, and paperless billing. As a frontend engineer, I'm responsible for the development and stability of the Molteo web platform, as well as collaborate with backend team to develop performant platform and APIs.`,
    responsibilities: [
      `Develop and maintain modern, performant, and robust code of Molteo
    Vue.js web application.`,
      `Revamp the overall web app UI design to enchance user experience.`,
      `Implement frontend codebase refactoring to enhance performance by 25% and code readibility, such as migrate whole codebase from JavaScript to
      TypeScript for type safety.`,
      `Write thorough web application end-to-end tests using Cypress.`,
      `Assist and collaborate with backend team developing and maintaining APIs with Node.js, Express and PostgreSQL.`,
    ],
  },
];
