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
      `Develop and maintain Lumina ecommerce landing page with Next.js,
      React, TypeScript, and Shopify integration.`,
      `Enhance the website performance and conversion rate by implementing
      AB tests, code splitting, and lazy loading, resulting in 30% increase in
      pagespeed score.`,
      `Applied a migration process from serverless functions architect to full
      backend API service, resulting in a 15% performance and reduction in
      cost.`,
      `Architect and develop backend REST API with Node.js, NestJS, and
      PostgreSQL and write unit and integration tests using Jest and Supertest
      to maintain code assurance and cover main usage scenarios.`,
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
      `Developed and maintained modern, performant, and robust code of
      Molteo web application with Vue.js, Vuex, Vuetify, and wrote end-to-end
      tests to cover main usage scenarios and code assurance.`,
      `Applied a migration process on frontend codebase from JavaScript to
      TypeScript to enhance code quality and improve performance, leading to
      a 20% reduction in bugs.`,
      `Collaborated with backend team to develop backend services APIs with
      Feathers.js, TypeScript, and PostgreSQL and maintained seamless
      frontend to backend integration.`,
      `Implemented new interface design from Figma to code and redesigned
      main components to improve overall user experience.`,
    ],
  },
];
