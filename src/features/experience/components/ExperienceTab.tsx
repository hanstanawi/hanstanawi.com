import cx from 'classnames';
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
    <div className='flex w-[800px] min-h-[300px] relative items-start'>
      {/* TABS */}
      <div className='relative z-[3] max-w-full flex flex-col justify-center transition-all ease-linear duration-200'>
        {EXPERIENCES.map((experience) => (
          <p
            key={experience.company}
            className={cx(
              `w-32 h-6 text-center py-6 flex items-center justify-center px-0 border-l-2 border-gray-200 
              text-gray-500 cursor-pointer`,
              id === experience.id
                ? selectedTabClass
                : 'hover:bg-gray-200 hover:bg-opacity-50 hover:text-black'
            )}
            onClick={() => handleSelectTab(experience.id)}
          >
            {experience.company}
          </p>
        ))}

        {/* HIGHLIGHTER */}
        <span className=''></span>
      </div>
      {/* CONTENT */}
      <div className='relative py-0 px-5'>
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
