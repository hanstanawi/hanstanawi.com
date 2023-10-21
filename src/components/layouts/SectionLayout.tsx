import { ReactNode } from 'react';

type SectionLayoutProps = {
  children: ReactNode;
};

const SectionLayout = ({ children }: SectionLayoutProps) => {
  return (
    <div className="relative mx-auto my-0 box-border h-full w-full max-w-sm px-6 sm:max-w-lg sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {children}
    </div>
  );
};

export default SectionLayout;
