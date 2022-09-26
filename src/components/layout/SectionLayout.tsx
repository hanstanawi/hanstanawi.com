import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
};

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return (
    <div className='my-0 mx-auto box-border relative max-w-480 w-full h-full max-w-1100'>
      {children}
    </div>
  );
};

export default SectionLayout;
