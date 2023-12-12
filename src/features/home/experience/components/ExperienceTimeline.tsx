import { cn } from 'lib/utils.lib';
import Circles from 'public/assets/circles-3.svg';

import { EXPERIENCES } from '../experience.constant';
import JobDescription from './JobDescription';

const ExperienceTimeline = () => {
  return (
    <div className="flow-root sm:max-w-2xl lg:max-w-3xl">
      <ul role="list" className="-mb-8">
        {EXPERIENCES.map((experience, idx) => (
          <li key={experience.id}>
            <div className="relative pb-10">
              {idx !== EXPERIENCES.length - 1 ? (
                <span
                  className="absolute left-[5px] top-4 -ml-px h-full w-0.5 bg-gray-200 dark:w-[1px] md:left-[7px]"
                  aria-hidden="true"
                />
              ) : null}
              {/* BASE LINE */}
              <span
                className="absolute left-[5px] top-4 -ml-px h-[92%] w-0.5 bg-gray-200 dark:w-[1px] sm:h-[90%] md:left-[7px]"
                aria-hidden="true"
              />
              <div className="relative flex space-x-6">
                <div className="pt-2.5">
                  <span
                    className={cn(
                      'bg-gray-200',
                      'flex h-2.5 w-2.5 items-center justify-center rounded-full ring-8 ring-white dark:ring-darkV2 md:h-3.5 md:w-3.5',
                    )}
                  ></span>
                </div>
                <div className="z-20 flex min-w-0 flex-1 justify-between space-x-4">
                  <JobDescription experience={experience} isSelected />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-28 -right-2 z-0 hidden opacity-50 dark:hidden lg:block">
              <Circles />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
