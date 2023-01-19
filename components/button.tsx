import { useState, useRef } from 'react';
import useGradient from '@/hooks/useGradient';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const [gradient, handleMove, ref] =
    useGradient<HTMLButtonElement>();
  return (
    <button
      className={`button ${className}`}
      style={{ background: gradient }}
      onMouseMove={handleMove.onMouseMove}
      onTouchMove={handleMove.onTouchMove}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
