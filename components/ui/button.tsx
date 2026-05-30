import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, disabled, className = "", ...props }: ButtonProps) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`group relative flex items-center justify-between bg-primary p-1 rounded-full w-max min-w-[180px] h-[50px] cursor-pointer border-none outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 ${className}`}
      {...props}
    >
      <div className="absolute right-1 top-1 bottom-1 w-[42px] bg-black rounded-full transition-all duration-500 ease-out group-hover:w-[calc(100%-8px)] pointer-events-none group-disabled:hidden" />

      {/* Button Text */}
      <span className="relative z-10 pl-6 pr-4 text-app-sm md:text-app-base font-semibold text-black group-hover:text-white transition-colors duration-500 whitespace-nowrap flex-1 text-center">
        {isLoading ? 'Processing...' : children}
      </span>

      {/* Arrow Icon Circle */}
      <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-black rounded-full shrink-0">
        {isLoading ? (
          <Loader2 className="w-5 h-5 text-white animate-spin" />
        ) : (
          <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </div>
    </button>
  );
};