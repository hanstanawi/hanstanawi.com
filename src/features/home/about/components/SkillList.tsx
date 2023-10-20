type SkillListProps = {
  title: string;
  skills: string[];
};

const SkillList = ({ title, skills }: SkillListProps) => {
  return (
    <div className="w-full">
      <p className="font-bold md:text-base text-sm dark:text-gray-300 text-black uppercase pb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="font-light dark:text-gray-300 text-black md:text-sm text-xs"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
