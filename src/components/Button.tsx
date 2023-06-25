import cx from 'classnames';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  sizeClasses: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const Button = ({ children, sizeClasses, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        `bg-transparent rounded-lg font-medium dark:text-tealGreen text-black 
        border dark:border-tealGreen border-black md:hover:text-white md:hover:bg-black 
        dark:hover:bg-tealGreen dark:hover:bg-opacity-20 transition duration-300`,
        sizeClasses
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
