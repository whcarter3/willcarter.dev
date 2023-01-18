import { useState, useRef } from 'react';

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
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const gradient = `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffDD4a, #ff9000)`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (buttonRect) {
      setMouseX(e.clientX - buttonRect.left);
      setMouseY(e.clientY - buttonRect.top);
    }
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLButtonElement>
  ) => {
    setMouseX(e.touches[0].clientX);
    setMouseY(e.touches[0].clientY);
  };

  return (
    <button
      className={`button ${className}`}
      style={{ background: gradient }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      ref={buttonRef}
      type={type}
      value={value}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
