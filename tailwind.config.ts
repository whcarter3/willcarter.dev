import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    fontFamily: {
      heading: ['var(--font-pt-mono)', ...fontFamily.serif],
      body:    ['var(--font-source-sans-pro)', ...fontFamily.sans],
      mono:    ['var(--font-pt-mono)', ...fontFamily.mono],
    },
    extend: {
      colors: {
        // Design token wrappers — resolve at runtime from CSS custom properties
        fg: {
          1:       'var(--fg-1)',
          2:       'var(--fg-2)',
          3:       'var(--fg-3)',
          'on-sun': 'var(--fg-on-sun)',
        },
        bg: {
          1:     'var(--bg-1)',
          2:     'var(--bg-2)',
          3:     'var(--bg-3)',
          inset: 'var(--bg-inset)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          2:       'var(--accent-2)',
          sky:     'var(--accent-sky)',
        },
        border: {
          1: 'var(--border-1)',
          2: 'var(--border-2)',
        },
      },
      boxShadow: {
        sm:   'var(--shadow-sm)',
        md:   'var(--shadow-md)',
        lg:   'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};

export default config;
