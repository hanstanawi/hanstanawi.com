import Button from 'components/Button';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import SectionLayout from 'components/SectionLayout';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='bg-white font-basic lg:scroll-smooth'>
      <Navbar />
      <main>
        <SectionLayout>
          <div className='md:min-h-[100vh] min-h-[90vh] flex flex-col items-center justify-center'>
            <h1 className='md:text-[182px] text-[132px] font-semibold'>404</h1>
            <h1 className='md:text-4xl text-2xl -mt-6'>Page Not Found</h1>
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
      <Footer />
    </div>
  );
};

export default NotFoundPage;
