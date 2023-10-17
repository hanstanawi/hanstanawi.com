import Image from 'next/image';
import Circles from 'public/assets/circles-2.svg';
import ProfileImageSrc from 'public/images/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="lg:w-1/2 md:w-9/12 w-full pt-2.5 relative">
      <Image
        src={ProfileImageSrc}
        alt="profile"
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        blurDataURL={`/_next/image?url=/images/profile.jpg&w=16&q=1`}
        priority
        loading="lazy"
      />
      <div className="dark:hidden lg:block opacity-50 hidden absolute -bottom-20 -right-8">
        <Circles />
      </div>
    </div>
  );
};

export default ProfileImage;
