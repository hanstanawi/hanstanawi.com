import { ReactNode } from 'react';
import { cn } from 'lib/utils.lib';

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
      className={cn(
        `rounded-lg border border-black bg-transparent font-medium 
        text-black transition duration-300 dark:border-tealGreen dark:text-tealGreen 
        dark:hover:bg-tealGreen dark:hover:bg-opacity-20 md:hover:bg-black md:hover:text-white`,
        sizeClasses,
      )}
      role="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
