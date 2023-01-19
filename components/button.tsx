import { useState, useRef } from 'react';
import useGradient from '@/hooks/useGradient';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  type = 'button',
  value,
  disabled,
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
      type={type}
      value={value}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
