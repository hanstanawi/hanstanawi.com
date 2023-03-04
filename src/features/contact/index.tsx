import SectionLayout from 'components/SectionLayout';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id='about'>
      <SectionLayout>
        <div className='h-[400px] md:h-[550px] w-full'>
          <div className='flex flex-col h-full justify-center items-center md:gap-y-7 gap-y-4'>
            <h1 className='md:text-5xl text-3xl text-center font-semibold text-black'>
              Get In Touch
            </h1>
            <div className='md:text-lg text-sm text-center text-gray-500 md:w-7/12 w-full font-light mb-3'>
              <h4 className='mb-1'>
                I&apos;m currently open to new opportunities for both frontend
                and backend engineer position globally, as well as freelance and
                open-source collaborations. <br></br>
              </h4>
              <h4>My inbox is always open!</h4>
            </div>
            <Link href={'mailto:hanstanawi@gmail.com'}>
              <a className='border-black border md:p-4 p-3 md:text-lg text-sm rounded-md hover:text-white hover:bg-black transition delay-200'>
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Contact;
