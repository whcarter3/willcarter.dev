/* ============================================================================
   Chrome components: Logo, ThemeToggle, Nav, Footer, social icons.
   Icons via Font Awesome 6 (free) — matches the original react-icons/fa usage.
   ========================================================================== */

const LOGO_SRC = '../../assets/logo-square.png';

function Logo({ size = 56, onClick }) {
  return (
    <a href="#home" className="nav-logo-wrap" onClick={onClick} aria-label="Will Carter — home">
      <img className="nav-logo" src={LOGO_SRC} width={size} height={size} alt="Will Carter Dev logo" />
    </a>
  );
}

function ThemeToggle() {
  const [theme, toggle] = window.__wcTheme;
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Daybreak' : 'Nightfall'}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
    </button>
  );
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'blog', label: 'Blog' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function Nav({ route, go, transparent }) {
  // On the home screen the nav stays fully transparent so the hero is the only
  // signature gradient. Elsewhere it carries the cursor-following sunburst.
  const [gradient, handlers, ref] = useGradient();
  const [open, setOpen] = useState(false);
  const navProps = transparent
    ? {}
    : { ref, ...handlers, style: gradient ? { background: gradient } : undefined };

  // Close the menu on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const choose = (id) => { setOpen(false); go(id); };

  return (
    <nav className={'nav' + (transparent ? ' is-transparent' : '')} {...navProps}>
      <div className="nav-inner">
        <a className="nav-wordmark" onClick={(e) => { e.preventDefault(); go('home'); }} href="#" aria-label="willcarter.dev — home">
          willcarter.dev
        </a>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className={'menu-btn' + (open ? ' is-open' : '')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>

        {open && <div className="menu-backdrop" onClick={() => setOpen(false)}></div>}

        <div className={'menu-panel' + (open ? ' is-open' : '')} role="menu" aria-hidden={!open}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={'#' + l.id}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={(e) => { e.preventDefault(); choose(l.id); }}
              className={'menu-link' + (route === l.id ? ' is-active' : '')}
              aria-current={route === l.id ? 'page' : undefined}
            >
              <span>{l.label}</span>
              {route === l.id && <span className="menu-dot" aria-hidden="true"></span>}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const SOCIALS = [
  { href: 'https://github.com/whcarter3', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/carterthethird/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://codepen.io/carterthethird', icon: 'codepen', label: 'CodePen' },
  { href: 'mailto:hello@willcarter.dev', icon: 'mail', label: 'Email' },
];

function Footer({ transparent }) {
  return (
    <GradientSurface baseClass={'footer' + (transparent ? ' is-transparent' : '')} as="footer">
      <div className="footer-inner">
        {SOCIALS.map((s) => (
          <a key={s.label} className="footer-link" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            <Icon name={s.icon} size={26} />
          </a>
        ))}
      </div>
    </GradientSurface>
  );
}

Object.assign(window, { Logo, ThemeToggle, Nav, Footer, NAV_LINKS, SOCIALS, LOGO_SRC });
