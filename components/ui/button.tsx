import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, disabled, ...props }: ButtonProps) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`relative inline-flex items-center justify-center gap-4 bg-[#EF7D25] text-black font-medium py-2 pl-6 pr-2 rounded-full transition-all hover:bg-[#d86a1c] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed`}
      {...props}
    >
      <span className="text-sm font-semibold">{isLoading ? 'Processing...' : children}</span>
      <div className="bg-black rounded-full p-2 flex items-center justify-center">
        {isLoading ? (
          <Loader2 className="w-4 h-4 text-white animate-spin" />
        ) : (
          <ArrowRight className="w-4 h-4 text-white" />
        )}
      </div>
    </button>
  );
};