export type Project = {
  id: string;
  title: string;
  description: string;
  githubUrl: string | null;
  demoUrl: string;
  technologies: string[];
  imageSrc: string;
};
