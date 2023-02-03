import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='bg-transparent rounded-lg font-medium text-black border border-gray-700 px-8 py-4 hover:text-white hover:bg-black'>
      {children}
    </button>
  );
};

export default Button;
