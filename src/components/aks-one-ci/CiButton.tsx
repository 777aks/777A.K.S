import React from 'react';
import { cn } from '../../lib/utils';

interface CiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
}

export const CiButton: React.FC<CiButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const variants = {
    primary: 'bg-aks-blue text-white hover:bg-aks-blue-dark',
    secondary: 'bg-aks-blue-light text-white hover:bg-aks-blue',
    outline: 'border-2 border-aks-blue text-aks-blue hover:bg-aks-blue hover:text-white',
    green: 'bg-ci-green text-white hover:opacity-90',
    orange: 'bg-ci-orange text-white hover:opacity-90',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
