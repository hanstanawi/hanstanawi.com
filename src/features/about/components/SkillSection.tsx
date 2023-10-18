import {
  FRAMEWORKS_SKILLS,
  LANGUAGES_SKILLS,
  TOOLS_SKILLS,
} from '../about.constant';
import SkillList from './SkillList';

const SkillSection = () => {
  return (
    <div className="flex md:justify-start justify-between md:gap-x-18 gap-x-9 w-full pt-2">
      <SkillList title="Languages" skills={LANGUAGES_SKILLS} />
      <SkillList title="Frameworks" skills={FRAMEWORKS_SKILLS} />
      <SkillList title="Tools" skills={TOOLS_SKILLS} />
    </div>
  );
};

export default SkillSection;
