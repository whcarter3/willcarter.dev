import { useState, useRef } from 'react';

function getGradientStops(): string {
  if (typeof document === 'undefined') return '#FFF1A6, #FFDD4A 30%, #FE9000 72%, #F2660F';
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? '#FFC24B, #FF6B4A 45%, #C2468B 78%, #6A3FA0'
    : '#FFF1A6, #FFDD4A 30%, #FE9000 72%, #F2660F';
}

const useGradient = <T extends HTMLElement>(): [
  string,
  { onMouseMove: (e: React.MouseEvent<T>) => void; onTouchMove: (e: React.TouchEvent<T>) => void },
  React.MutableRefObject<T | null>
] => {
  const [gradient, setGradient] = useState<string>('');
  const ref = useRef<T>(null);

  const compute = (x: number, y: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGradient(
      `radial-gradient(circle at ${x - rect.left}px ${y - rect.top}px, ${getGradientStops()})`
    );
  };

  const onMouseMove = (e: React.MouseEvent<T>) => compute(e.clientX, e.clientY);
  const onTouchMove = (e: React.TouchEvent<T>) => compute(e.touches[0].clientX, e.touches[0].clientY);

  return [gradient, { onMouseMove, onTouchMove }, ref];
};

export default useGradient;
