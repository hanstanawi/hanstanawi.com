import { cn } from 'lib/utils.lib';
import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  sizeClasses: string;
};

const Button = ({
  children,
  sizeClasses,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        `rounded-lg border border-black bg-transparent font-medium text-black transition duration-300 dark:border-tealGreen dark:text-tealGreen dark:hover:bg-tealGreen dark:hover:bg-opacity-20 md:hover:bg-black md:hover:text-white`,
        sizeClasses,
      )}
      role="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
