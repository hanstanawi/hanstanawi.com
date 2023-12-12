import { cn } from 'lib/utils.lib';
import { type PropsWithChildren, type RefObject } from 'react';

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
      <div className="relative mx-auto my-0 box-border h-full w-full max-w-sm px-6 sm:max-w-lg sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
