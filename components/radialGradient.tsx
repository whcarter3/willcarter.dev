import React, { useState } from 'react';

type RadialGradientProps = {
  children?: React.ReactNode;
};

function RadialGradient({
  children,
}: RadialGradientProps): JSX.Element {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen bg-brand-blue"
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffDD4a, #ff9000)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RadialGradient;
