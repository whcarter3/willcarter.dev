import { useThemeContext } from '@/contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
