import { useState, useRef, useEffect, useCallback } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

const LIGHT_STOPS = '#FFF1A6, #FFDD4A 30%, #FE9000 72%, #F2660F';
const DARK_STOPS = '#FFC24B, #FF6B4A 45%, #C2468B 78%, #6A3FA0';

function stopsForTheme(theme: 'light' | 'dark'): string {
  return theme === 'dark' ? DARK_STOPS : LIGHT_STOPS;
}

const useGradient = <T extends HTMLElement>(): [
  string,
  { onMouseMove: (e: React.MouseEvent<T>) => void; onTouchMove: (e: React.TouchEvent<T>) => void },
  React.MutableRefObject<T | null>
] => {
  const { theme } = useThemeContext();
  const [gradient, setGradient] = useState<string>('');
  const ref = useRef<T>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  // Recompute gradient when theme changes — reuse last cursor position if available,
  // otherwise fall back to the linear gradient
  useEffect(() => {
    const pos = lastPos.current;
    const rect = ref.current?.getBoundingClientRect();
    if (pos && rect) {
      setGradient(
        `radial-gradient(circle at ${pos.x - rect.left}px ${pos.y - rect.top}px, ${stopsForTheme(theme)})`
      );
    } else {
      setGradient(`linear-gradient(135deg, ${stopsForTheme(theme)})`);
    }
  }, [theme]);

  const compute = useCallback((x: number, y: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    lastPos.current = { x, y };
    setGradient(
      `radial-gradient(circle at ${x - rect.left}px ${y - rect.top}px, ${stopsForTheme(theme)})`
    );
  }, [theme]);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => compute(e.clientX, e.clientY), [compute]);
  const onTouchMove = useCallback((e: React.TouchEvent<T>) => compute(e.touches[0].clientX, e.touches[0].clientY), [compute]);

  return [gradient, { onMouseMove, onTouchMove }, ref];
};

export default useGradient;
