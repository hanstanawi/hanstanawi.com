import cx from 'classnames';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  sizeClasses: string;
};

const Button = ({ children, sizeClasses }: ButtonProps) => {
  return (
    <button
      className={cx(
        `bg-transparent rounded-lg font-medium text-tealGreen 
        border border-tealGreen md:hover:text-white md:hover:bg-tealGreen transition duration-300`,
        sizeClasses
      )}
    >
      {children}
    </button>
  );
};

export default Button;
