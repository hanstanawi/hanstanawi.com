import { projects } from 'features/projects/projects.constant';
import MainProjectItem from './MainProject';

const MainProjectsList = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-y-24'>
      {projects.map((project, idx) => (
        <MainProjectItem key={project.id} index={idx} project={project} />
      ))}
    </div>
  );
};

export default MainProjectsList;
