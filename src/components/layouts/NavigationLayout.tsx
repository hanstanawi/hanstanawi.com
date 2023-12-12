'use client';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import { PropsWithChildren } from 'react';

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
