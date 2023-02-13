import cx from 'classnames';
import { format } from 'date-fns';
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
    'MMMM yyyy'
  );

  const formattedEndDate = formatEndDate(experience.endDate);

  return (
    <div
      className={cx(
        isSelected ? 'flex w-full opacity-1' : 'absolute opacity-0',
        'flex-col gap-y-4 transition-opacity duration-100 top-0 left-0'
      )}
    >
      <h3 className='text-3xl'>
        <span className='font-semibold'>{experience.role}</span>{' '}
        <span className='text-tealGreen font-medium'>
          <Link href={experience.url}>
            <a target={'_blank'}>@ {experience.company}</a>
          </Link>
        </span>
      </h3>
      <p className='text-gray-500 text-base'>
        {formattedStartDate} - {formattedEndDate}
      </p>
      <p className='text-lg'>{experience.description}</p>

      <ul className='flex flex-col gap-y-2 list-disc text-gray-500 pl-4'>
        {experience.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
