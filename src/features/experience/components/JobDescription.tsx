import cx from 'classnames';
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
        <span className='font-medium'>{experience.role}</span>{' '}
        <span className='text-gray-600'>@ {experience.company}</span>
      </h3>
      <p>
        {formattedStartDate} - {formattedEndDate}
      </p>
      <p>{experience.description}</p>

      <ul className='flex flex-col gap-y-2 list-disc text-gray-500'>
        {experience.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
