import React, { useState, useRef, useEffect } from 'react';

type RadialGradientProps = {
  className?: string;
  children?: React.ReactNode;
};

function RadialGradient({
  children,
  className,
}: RadialGradientProps): JSX.Element {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const gradient = `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffDD4a, #ff9000)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setMouseX(e.touches[0].clientX);
    setMouseY(e.touches[0].clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`w-screen h-screen ${className}`}
    >
      <div
        className="w-full h-full pl-5 pt-3"
        style={{
          background: gradient,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RadialGradient;
