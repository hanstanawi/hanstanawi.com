import cx from 'classnames';
import { EXPERIENCES } from '../experience.constant';
import JobDescription from './JobDescription';
import Circles from 'public/images/circles-3.svg';

const ExperienceTimeline = () => {
  return (
    <div className='flow-root lg:max-w-3xl sm:max-w-2xl'>
      <ul role='list' className='-mb-8'>
        {EXPERIENCES.map((experience, idx) => (
          <li key={experience.id}>
            <div className='relative pb-14'>
              {idx !== EXPERIENCES.length - 1 ? (
                <span
                  className='absolute top-4 md:left-[7px] left-[5px] -ml-px h-full dark:w-[1px] w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              {/* BASE LINE */}
              <span
                className='absolute top-4 md:left-[7px] left-[5px] -ml-px h-[90%] sm:h-[85%] dark:w-[1px] w-0.5 bg-gray-200'
                aria-hidden='true'
              />
              <div className='relative flex space-x-6'>
                <div className='pt-2.5'>
                  <span
                    className={cx(
                      'bg-gray-200',
                      'md:h-3.5 md:w-3.5 h-2.5 w-2.5 rounded-full flex items-center justify-center ring-8 dark:ring-darkV2 ring-white'
                    )}
                  ></span>
                </div>
                <div className='flex min-w-0 flex-1 justify-between space-x-4 z-20'>
                  <JobDescription experience={experience} isSelected />
                </div>
              </div>
            </div>
            <div
              className='dark:hidden lg:block hidden absolute -bottom-24 -right-2 z-0 opacity-40'
              // style={{ transform: 'scaleX(-1)' }}
            >
              <Circles />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
