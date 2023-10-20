'use client';
import { PropsWithChildren } from 'react';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';

const NavigationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavigationLayout;
