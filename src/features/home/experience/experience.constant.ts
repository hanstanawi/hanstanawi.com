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
      `Lead the development of Lumina landing page with responsive design using React, TypeScript, and Next.js, resulting in 2.5% of average conversion rate with 2K+ of daily user visits.`,
      `Build and maintain backend REST APIs from the ground up, utilizing Node.js, TypeScript, Nest.js, and Docker with PostgreSQL database. Reduced API response time by 30% and enhanced scalability to support 20K+ users.`,
      `Improved landing page loading speed by applying techniques such as, code splitting, lazy loading, and image optimization, achieved a 20% improvement in pagespeed score.`,
      `Reduce risk of bugs by utilizing Jest for unit and integration tests, resulting in a 50% increase in code reliability and overall product stability.`,
      `Lead the initiative to implement CI/CD pipelines with GitHub Actions, automating the build, test, and deployment process to Heroku; reduced feedback loops by 50% and boosted team productivity by 30%.`,
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
      `Developed, maintained, and optimized Molteo web application for construction companies with Vue, Vuex, and Vuetify tech stack. Reduced application loading time by 20% and enhanced user experience to support 10+ companies with 200+ of daily users.`,
      `Increased the E2E test coverage using Cypress by 50% to cover main usage scenarios flow and ensure product stability.`,
      `Led the development of Project History feature by building a new web platform using Vue and Tailwind, leading to 3+ construction companies signing up with Molteo.`,
      `Spearheaded the migration process on frontend codebase from JavaScript to TypeScript to enhance code quality, better development experience, and improve performance, leading to a 20% reduction in bugs.`,
      `Collaborated with cross-functional teams, including backend engineers and product manager, to develop backend REST API with Node.js and TypeScript, resulting in more seamless frontend to backend integration and 40% boost in performance.`,
    ],
  },
];
