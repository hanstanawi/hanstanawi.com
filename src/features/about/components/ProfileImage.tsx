import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className='md:w-1/2 w-full pt-2.5'>
      <Image
        src='/images/profile.jpg'
        height='500'
        width='600'
        objectFit='cover'
        alt='profile'
      />
    </div>
  );
};

export default ProfileImage;
