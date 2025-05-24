import { cn } from 'lib/utils.lib';
import { useState } from 'react';

import { EXPERIENCES } from '../experience.constant';
import JobDescription from './JobDescription';

const ExperienceTab = () => {
  const [id, setId] = useState<string>(EXPERIENCES[0].id);

  const selectedTabClass = `bg-gray-200 text-black bg-opacity-50`;

  const handleSelectTab = (selectedId: string) => {
    if (id !== selectedId) {
      setId(selectedId);
    }
  };

  return (
    <div className="relative flex min-h-[300px] w-[800px] items-start">
      {/* TABS */}
      <div className="relative z-[3] flex max-w-full flex-col justify-center transition-all duration-200 ease-linear">
        {EXPERIENCES.map((experience) => (
          <p
            key={experience.company}
            className={cn(
              `flex h-6 w-32 cursor-pointer items-center justify-center border-l-2 border-gray-200 px-0 py-6 text-center text-gray-500`,
              id === experience.id
                ? selectedTabClass
                : 'hover:bg-gray-200 hover:bg-opacity-50 hover:text-black',
            )}
            onClick={() => handleSelectTab(experience.id)}
          >
            {experience.company}
          </p>
        ))}

        {/* HIGHLIGHTER */}
        <span className=""></span>
      </div>
      {/* CONTENT */}
      <div className="relative px-5 py-0">
        {EXPERIENCES.map((experience) => (
          <JobDescription
            key={experience.id}
            experience={experience}
            isSelected={experience.id === id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
