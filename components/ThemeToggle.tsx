import { useState, useCallback, useRef, useEffect } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

interface ThemeToggleProps {
  variant?: 'hero' | 'menu';
}

function useIsMac() {
  const [isMac, setIsMac] = useState(true);
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);
  return isMac;
}

export default function ThemeToggle({ variant = 'hero' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeContext();
  const [fading, setFading] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const isMac = useIsMac();

  const handleClick = useCallback(() => {
    if (fading) return;
    setFading(true);

    // Read the actual animation duration from the svg child's computed style
    const svg = btnRef.current?.querySelector('svg');
    const raw = svg ? getComputedStyle(svg).animationDuration : '0.3s';
    const dur = raw.endsWith('ms') ? parseFloat(raw) : parseFloat(raw) * 1000;

    // SYNC: 0.12 must land inside the icon-fade keyframe's 8%–20% opacity:0 window.
    // If keyframe %-windows change, update this multiplier to match.
    // dur is read from .theme-toggle.is-fading animationDuration in globals.css.
    setTimeout(toggleTheme, dur * 0.12);
    setTimeout(() => setFading(false), dur);
  }, [fading, toggleTheme]);

  const cls = variant === 'menu'
    ? `theme-toggle-menu${fading ? ' is-fading' : ''}`
    : `theme-toggle${fading ? ' is-fading' : ''}`;

  return (
    <button
      ref={btnRef}
      className={cls}
      onClick={handleClick}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
      {variant === 'menu' && (
        <kbd className="theme-shortcut">{isMac ? '⌘' : 'Ctrl'}↵</kbd>
      )}
    </button>
  );
}
