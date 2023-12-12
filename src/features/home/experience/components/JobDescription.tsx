import { format } from 'date-fns';
import { cn } from 'lib/utils.lib';
import Link from 'next/link';

import { Experience } from '../experience.type';

type JobDescriptionProps = {
  experience: Experience;
  isSelected: boolean;
};

const formatEndDate = (endDate: string | null): string => {
  if (endDate) {
    return format(new Date(endDate), 'MMMM yyyy');
  }
  return 'Present';
};

const JobDescription = ({ experience, isSelected }: JobDescriptionProps) => {
  const formattedStartDate = format(
    new Date(experience.startDate),
    'MMMM yyyy',
  );

  const formattedEndDate = formatEndDate(experience.endDate);

  return (
    <div
      className={cn(
        isSelected ? 'opacity-1 flex w-full' : 'absolute opacity-0',
        'left-0 top-0 flex-col gap-y-4 transition-opacity duration-100',
      )}
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl">
        <span className="font-semibold text-black dark:text-gray-300">
          {experience.role}
        </span>{' '}
        <span className="font-medium text-tealGreen">
          <Link
            href={experience.url}
            target={'_blank'}
            className="border-b-2 border-transparent transition duration-300 md:hover:border-tealGreen"
            rel="noreferrer"
          >
            @ {experience.company}
          </Link>
        </span>
      </h2>
      <div>
        <p className="pb-1 text-base text-gray-800 dark:text-gray-400 md:text-lg">
          {experience.location}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">
          {formattedStartDate} - {formattedEndDate}
        </p>
      </div>
      <p className="text-sm text-black dark:text-gray-300 md:text-base lg:text-lg lg:leading-[26px]">
        {experience.description}
      </p>

      <ul className="flex list-disc flex-col gap-y-4 pl-4 text-[13px] text-gray-500 dark:text-gray-400 md:text-base">
        {experience.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
