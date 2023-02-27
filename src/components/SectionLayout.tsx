import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
};

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return (
    <div className='my-0 mx-auto box-border relative sm:max-w-6xl max-w-sm sm:px-0 px-6 w-full h-full'>
      {children}
    </div>
  );
};

export default SectionLayout;
