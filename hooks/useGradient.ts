import { useState, useRef, useEffect, useCallback } from 'react';

const STOPS = 'var(--grad-1), var(--grad-2) 30%, var(--grad-3) 72%, var(--grad-4)';
const JUMP_THRESHOLD = 200; // px — distance that triggers a lerp instead of a snap
const LERP_SPEED = 0.15;    // 0–1 — how fast to catch up each frame

const useGradient = <T extends HTMLElement>(): [
  string,
  { onMouseMove: (e: React.MouseEvent<T>) => void; onTouchMove: (e: React.TouchEvent<T>) => void },
  React.MutableRefObject<T | null>
] => {
  const [gradient, setGradient] = useState<string>('');
  const ref = useRef<T>(null);
  const pos = useRef({ x: 0, y: 0 });       // last rendered position (local coords)
  const target = useRef({ x: 0, y: 0 });     // where we're lerping toward
  const animating = useRef(false);
  const initialized = useRef(false);

  useEffect(() => {
    setGradient(`linear-gradient(135deg, ${STOPS})`);
  }, []);

  const applyGradient = useCallback((lx: number, ly: number) => {
    pos.current = { x: lx, y: ly };
    setGradient(`radial-gradient(circle at ${lx}px ${ly}px, ${STOPS})`);
  }, []);

  const startLerp = useCallback(() => {
    if (animating.current) return;
    animating.current = true;

    const step = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;

      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
        applyGradient(target.current.x, target.current.y);
        animating.current = false;
        return;
      }

      applyGradient(
        pos.current.x + dx * LERP_SPEED,
        pos.current.y + dy * LERP_SPEED,
      );
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [applyGradient]);

  const compute = useCallback((x: number, y: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const lx = x - rect.left;
    const ly = y - rect.top;

    if (!initialized.current) {
      initialized.current = true;
      applyGradient(lx, ly);
      return;
    }

    const dx = lx - pos.current.x;
    const dy = ly - pos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > JUMP_THRESHOLD) {
      target.current = { x: lx, y: ly };
      startLerp();
    } else {
      // Close enough — snap directly, and update lerp target if animating
      target.current = { x: lx, y: ly };
      if (!animating.current) {
        applyGradient(lx, ly);
      }
    }
  }, [applyGradient, startLerp]);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => compute(e.clientX, e.clientY), [compute]);
  const onTouchMove = useCallback((e: React.TouchEvent<T>) => compute(e.touches[0].clientX, e.touches[0].clientY), [compute]);

  return [gradient, { onMouseMove, onTouchMove }, ref];
};

export default useGradient;
