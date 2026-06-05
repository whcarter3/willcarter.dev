import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import useGradient from '@/hooks/useGradient';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

interface NavProps {
  transparent?: boolean;
}

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function Nav({ transparent }: NavProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [gradient, handlers, ref] = useGradient<HTMLElement>();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  // Close menu on Escape — only attach listener when menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav
      ref={ref}
      className={classNames('nav', transparent && 'is-transparent')}
      style={
        !transparent && gradient
          ? { background: gradient }
          : undefined
      }
      {...handlers}
    >
      <div className="nav-inner">
        <Link href="/">
          <span className="nav-wordmark">willcarter.dev</span>
        </Link>

        <div className="nav-actions">
          <button
            className={classNames('menu-btn', open && 'is-open')}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {open && (
          <div
            className="menu-backdrop"
            onClick={() => setOpen(false)}
          />
        )}

        <div className={classNames('menu-panel', open && 'is-open')}>
          {links.map(({ href, label }) => {
            const isActive =
              href === '/blog'
                ? router.pathname.startsWith(href)
                : router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={classNames(
                  'menu-link',
                  isActive && 'is-active',
                )}
                onClick={() => setOpen(false)}
              >
                {label}
                {isActive && <span className="menu-dot" />}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
