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
      `Lead the development of Lumina e-commerce landing page with responsive design using React, TypeScript, Next.js, and TailwindCSS. Successfully integrate Shopify API to  ensure seamless e-commerce operations.`,
      `Build and manage a backend  RESTful API from the ground up utilizing Node.js, TypeScript, NestJS, and Prisma as a foundation for the Lumina Studio application and PostgreSQL as database server.`,
      `Improved landing page loading speed by applying techniques such as, code splitting, lazy loading, and image optimization, achieved a 20% improvement in pagespeed score.`,
      `Implement A/B testing on webpage content, utilizing Google Analytics and  Amplitude  to collect user analytics, resulting in 3% improvement on conversion rate.`,
      `Utilize Jest and Supertest to implement unit and integrations, enhance code assurance and decrease the risk of bugs.`,
      `Implement a CI/CD pipeline using Github  Actions to automate the build, test, and deployment process to Heroku, resulting in faster feedback loops and increased productivity. `,
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
      `Developed and maintained modern, performant, and robust code of Molteo web  application with Vue, Vuex, and Vuetify. Wrote E2E tests using Cypress to cover main usage scenarios.`,
      `Led the development of Project History feature which allows companies to view and share projects with clients by building a new  web platform using Vue and  TailwindCSS, leading to 3+ construction companies signing up with Molteo software.`,
      `Applied a migration process on frontend codebase from JavaScript to TypeScript to enhance code quality, better development experience, and improve performance, leading to a 20% reduction in bugs.`,
      `Implemented a CI/CD pipeline using Gitlab CI to automate build, tests, and  deployment  process to AWS S3, resulting in increased productivity and efficient release process.`,
      `Collaborated with the backend team to develop backend RESTful API with Node.js,TypeScript, and PostgreSQL and maintained seamless frontend to backend integration.`,
    ],
  },
];
