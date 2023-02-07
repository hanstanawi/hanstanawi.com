import SkillSection from './SkillSection';

const Content = () => {
  return (
    <div className='md:w-1/2 w-full'>
      <div className='flex flex-col gap-y-5 text-gray-500 text-justify md:text-lg text-base'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </p>
        <p className=''>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <SkillSection />
      </div>
    </div>
  );
};

export default Content;
