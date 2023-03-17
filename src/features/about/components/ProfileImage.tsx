import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className='lg:w-1/2 md:w-9/12 w-full pt-2.5'>
      <Image
        src='/images/profile.jpg'
        height='500'
        width='600'
        objectFit='cover'
        alt='profile'
        placeholder='blur'
        blurDataURL={`/_next/image?url=/images/profile.jpg&w=16&q=1`}
      />
    </div>
  );
};

export default ProfileImage;
