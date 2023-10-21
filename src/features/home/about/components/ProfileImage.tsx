import Image from 'next/legacy/image';
import Circles from 'public/assets/circles-2.svg';

const ProfileImage = () => {
  return (
    <div className="relative w-full pt-2.5 md:w-9/12 lg:w-1/2">
      <Image
        src="/images/profile.jpg"
        alt="profile"
        height={500}
        width={600}
        placeholder="blur"
        objectFit="cover"
        blurDataURL={`/_next/image?url=/images/profile.jpg&w=16&q=1`}
      />
      <div className="absolute -bottom-20 -right-8 hidden opacity-50 dark:hidden lg:block">
        <Circles />
      </div>
    </div>
  );
};

export default ProfileImage;
