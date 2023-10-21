type SkillListProps = {
  title: string;
  skills: string[];
};

const SkillList = ({ title, skills }: SkillListProps) => {
  return (
    <div className="w-full">
      <p className="pb-4 text-sm font-bold uppercase text-black dark:text-gray-300 md:text-base">
        {title}
      </p>
      <ul className="flex flex-col gap-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-xs font-light text-black dark:text-gray-300 md:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
