import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className='w-1/2 pt-2.5'>
      <Image
        src='/profile.jpg'
        height='500'
        width='600'
        objectFit='cover'
        alt='profile'
      />
    </div>
  );
};

export default ProfileImage;
