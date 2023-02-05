import {
  FRAMEWORKS_SKILLS,
  LANGUAGES_SKILLS,
  TOOLS_SKILLS,
} from '../about.constant';
import SkillList from './SkillList';

const SkillSection = () => {
  return (
    <div className='flex gap-x-18'>
      <SkillList title='Languages' skills={LANGUAGES_SKILLS} />
      <SkillList title='Frameworks' skills={FRAMEWORKS_SKILLS} />
      <SkillList title='Tools' skills={TOOLS_SKILLS} />
    </div>
  );
};

export default SkillSection;
