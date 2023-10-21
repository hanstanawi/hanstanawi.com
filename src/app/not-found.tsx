import Link from 'next/link';
import Button from 'components/ui/Button';
import SectionLayout from 'components/layouts/SectionLayout';

const NotFoundPage = () => {
  return (
    <div className="bg-white font-basic dark:bg-darkV2 lg:scroll-smooth">
      <main>
        <SectionLayout id="not-found">
          <div className="flex min-h-[90vh] flex-col items-center justify-center md:min-h-[100vh]">
            <h1 className="text-[132px] font-semibold text-black dark:text-gray-300 md:text-[182px]">
              404
            </h1>
            <h1 className="-mt-6 text-2xl text-black dark:text-gray-300 md:text-4xl">
              Page Not Found
            </h1>
            <Link href="/" className="pt-10">
              <Button sizeClasses="md:px-10 px-7 md:py-4 py-3 md:text-base text-sm ">
                Go Home
              </Button>
            </Link>
          </div>
        </SectionLayout>
      </main>
    </div>
  );
};

export default NotFoundPage;
