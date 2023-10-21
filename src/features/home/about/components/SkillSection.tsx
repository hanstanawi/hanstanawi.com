import {
  FRAMEWORKS_SKILLS,
  LANGUAGES_SKILLS,
  TOOLS_SKILLS,
} from '../about.constant';
import SkillList from './SkillList';

const SkillSection = () => {
  return (
    <div className="md:gap-x-18 flex w-full justify-between gap-x-9 pt-2 md:justify-start">
      <SkillList title="Languages" skills={LANGUAGES_SKILLS} />
      <SkillList title="Frameworks" skills={FRAMEWORKS_SKILLS} />
      <SkillList title="Tools" skills={TOOLS_SKILLS} />
    </div>
  );
};

export default SkillSection;
