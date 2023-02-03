import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
};

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return (
    <div className='my-0 mx-auto box-border relative max-w-6xl w-full h-full'>
      {children}
    </div>
  );
};

export default SectionLayout;
