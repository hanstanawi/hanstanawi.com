import Button from 'components/Button';
import SectionLayout from 'components/SectionLayout';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='dark:bg-darkV2 bg-white font-basic lg:scroll-smooth'>
      <main>
        <SectionLayout>
          <div className='md:min-h-[100vh] min-h-[90vh] flex flex-col items-center justify-center'>
            <h1 className='md:text-[182px] text-[132px] font-semibold dark:text-gray-300 text-black'>
              404
            </h1>
            <h1 className='md:text-4xl text-2xl -mt-6 dark:text-gray-300 text-black'>
              Page Not Found
            </h1>
            <Link href='/'>
              <a className='pt-10'>
                <Button sizeClasses='md:px-10 px-7 md:py-4 py-3 md:text-base text-sm '>
                  Go Home
                </Button>
              </a>
            </Link>
          </div>
        </SectionLayout>
      </main>
    </div>
  );
};

export default NotFoundPage;
