import cx from 'classnames';
import Link from 'next/link';
import { format } from 'date-fns';
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
      className={cx(
        isSelected ? 'flex w-full opacity-1' : 'absolute opacity-0',
        'flex-col gap-y-4 transition-opacity duration-100 top-0 left-0',
      )}
    >
      <h3 className="lg:text-3xl sm:text-2xl text-xl">
        <span className="font-semibold dark:text-gray-300 text-black">
          {experience.role}
        </span>{' '}
        <span className="text-tealGreen font-medium">
          <Link
            href={experience.url}
            target={'_blank'}
            className="border-b-2 md:hover:border-tealGreen border-transparent transition duration-300"
            rel="noreferrer"
          >
            @ {experience.company}
          </Link>
        </span>
      </h3>
      <div>
        <p className="dark:text-gray-400 text-gray-800 md:text-lg text-base pb-1">
          {experience.location}
        </p>
        <p className="dark:text-gray-300 text-gray-500 md:text-base text-sm">
          {formattedStartDate} - {formattedEndDate}
        </p>
      </div>
      <p className="lg:text-lg lg:leading-[26px] md:text-base dark:text-gray-300 text-black text-sm">
        {experience.description}
      </p>

      <ul className="flex flex-col gap-y-4 list-disc dark:text-gray-400 text-gray-500 md:text-base text-[13px] pl-4">
        {experience.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
