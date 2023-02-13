import { useState } from 'react';
import classNames from 'classnames';

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
  const gradient = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(255, 221, 74), rgb(255, 144, 0))`;

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
      className={
        classNames(
          className && className,
          'w-screen h-screen'
        ) as string
      }
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
