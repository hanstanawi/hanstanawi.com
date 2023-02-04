type SkillListProps = {
  title: string;
  skills: string[];
};

const SkillList = ({ title, skills }: SkillListProps) => {
  return (
    <div className='w-full'>
      <p className='font-bold text-base text-black uppercase pb-5'>{title}</p>
      <ul className='flex flex-col gap-y-2'>
        {skills.map((skill) => (
          <li key={skill} className='font-light text-sm'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
