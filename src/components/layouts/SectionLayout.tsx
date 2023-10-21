import { cn } from 'lib/utils.lib';
import { type RefObject, type PropsWithChildren } from 'react';

type SectionLayoutProps = {
  id: string;
  forwardedRef?: RefObject<HTMLDivElement>;
  classNames?: string;
};

const SectionLayout = ({
  children,
  id,
  forwardedRef,
  classNames,
}: PropsWithChildren<SectionLayoutProps>) => {
  return (
    <section
      id={id}
      ref={forwardedRef}
      className={cn('scroll-mt-[60px]', classNames)}
    >
      <div className="my-0 mx-auto box-border relative xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg max-w-sm sm:px-0 px-6 w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
