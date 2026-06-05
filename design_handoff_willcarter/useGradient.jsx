/* ============================================================================
   useGradient — the signature cursor-following sunburst.
   Faithful recreation of hooks/useGradient.ts from willcarter.dev, made
   theme-aware: a bright sunburst in Daybreak, a sunset wash in Nightfall.
   ========================================================================== */
const { useState, useRef, useEffect, useCallback } = React;

// Returns the two-stop (or multi-stop) color list for the live radial gradient,
// matching the resolved mood of the current theme.
function gradientStops() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  return dark
    ? '#FFC24B, #FF6B4A 45%, #C2468B 78%, #6A3FA0'
    : '#FFF1A6, #FFDD4A 30%, #FE9000 72%, #F2660F';
}

function useGradient() {
  const ref = useRef(null);
  const [gradient, setGradient] = useState('');

  const apply = useCallback((clientX, clientY) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setGradient(`radial-gradient(circle at ${x}px ${y}px, ${gradientStops()})`);
  }, []);

  const handlers = {
    onMouseMove: (e) => apply(e.clientX, e.clientY),
    onTouchMove: (e) => apply(e.touches[0].clientX, e.touches[0].clientY),
  };

  return [gradient, handlers, ref];
}

/* A button that paints the sunburst under the cursor — the brand's hallmark. */
function GradientButton({ children, className = '', size, ...props }) {
  const [gradient, handlers, ref] = useGradient();
  const cls = ['btn', size === 'lg' ? 'btn-lg' : '', className].filter(Boolean).join(' ');
  return (
    <button
      ref={ref}
      className={cls}
      style={gradient ? { background: gradient } : undefined}
      {...handlers}
      {...props}
    >
      {children}
    </button>
  );
}

/* A surface whose sunburst follows the pointer (used by cards, nav, footer). */
function GradientSurface({ as = 'div', className = '', baseClass = '', children, style, ...props }) {
  const Tag = as;
  const [gradient, handlers, ref] = useGradient();
  return (
    <Tag
      ref={ref}
      className={[baseClass, className].filter(Boolean).join(' ')}
      style={{ ...(gradient ? { background: gradient } : {}), ...style }}
      {...handlers}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* Theme controller — persists choice, defaults to OS preference. */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('wc-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wc-theme', theme);
  }, [theme]);
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
}

Object.assign(window, { useGradient, GradientButton, GradientSurface, useTheme, gradientStops });
