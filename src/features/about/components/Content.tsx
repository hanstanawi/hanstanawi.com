import SkillSection from './SkillSection';

const Content = () => {
  return (
    <div className='md:w-1/2 w-full'>
      <div className='flex flex-col gap-y-5 text-gray-500 text-justify md:text-lg text-base'>
        <p>
          Hey! I&apos;m Hans, a full-stack software engineer who enjoys building
          things that live on the internet. Currently building cool user
          interfaces and performant server code at Lumina.
        </p>
        <p>I love</p>
        <p className=''>
          Fast forward to today, I have the privilege of working at one of most
          growing construction software start-ups in Germany and currently
          building cool stuff at Lumina. My main focus these
        </p>
        <SkillSection />
      </div>
    </div>
  );
};

export default Content;
