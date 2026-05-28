import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextArea?: boolean;
}

export const Input = ({ isTextArea, className = '', ...props }: InputProps) => {
  const baseStyles = "w-full bg-[#111111] text-white placeholder-zinc-500 p-4 rounded-sm outline-none focus:ring-1 focus:ring-[#EF7D25] transition-all text-sm";

  if (isTextArea) {
    return (
      <textarea
        className={`${baseStyles} resize-y min-h-[120px] ${className}`}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      className={`${baseStyles} ${className}`}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};