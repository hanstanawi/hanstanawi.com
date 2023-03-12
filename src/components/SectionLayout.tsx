import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
};

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return (
    <div className='my-0 mx-auto box-border relative xl:max-w-6xl sm:max-w-2xl max-w-sm sm:px-0 px-6 w-full h-full'>
      {children}
    </div>
  );
};

export default SectionLayout;
