import Image from 'next/image';
import Circles from 'public/images/circles-1.svg';

const ProfileImage = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className='lg:w-1/2 md:w-9/12 w-full pt-2.5 relative'>
      <Image
        src='/images/profile.jpg'
        height='500'
        width='600'
        objectFit='cover'
        alt='profile'
        placeholder='blur'
        blurDataURL={`/_next/image?url=/images/profile.jpg&w=16&q=1`}
      />
      <div className='dark:hidden lg:block opacity-60 hidden absolute -bottom-20 -right-8'>
        <Circles />
      </div>
    </div>
  );
};

export default ProfileImage;
