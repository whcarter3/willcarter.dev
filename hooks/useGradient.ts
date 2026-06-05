import { useState, useRef, useEffect, useCallback } from 'react';

const STOPS = 'var(--grad-1), var(--grad-2) 30%, var(--grad-3) 72%, var(--grad-4)';

const useGradient = <T extends HTMLElement>(): [
  string,
  { onMouseMove: (e: React.MouseEvent<T>) => void; onTouchMove: (e: React.TouchEvent<T>) => void },
  React.MutableRefObject<T | null>
] => {
  const [gradient, setGradient] = useState<string>('');
  const ref = useRef<T>(null);

  useEffect(() => {
    setGradient(`linear-gradient(135deg, ${STOPS})`);
  }, []);

  const compute = useCallback((x: number, y: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGradient(
      `radial-gradient(circle at ${x - rect.left}px ${y - rect.top}px, ${STOPS})`
    );
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => compute(e.clientX, e.clientY), [compute]);
  const onTouchMove = useCallback((e: React.TouchEvent<T>) => compute(e.touches[0].clientX, e.touches[0].clientY), [compute]);

  return [gradient, { onMouseMove, onTouchMove }, ref];
};

export default useGradient;
