import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import { ptMono, sourceSans3 } from '@/lib/fonts';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <ThemeProvider>
      {/* The variable classes also live on <Html> in _document so the
          variables exist at :root for the tokens.css font composites;
          importing the fonts here is what bundles their CSS client-side. */}
      <div className={`${ptMono.variable} ${sourceSans3.variable} font-body`} style={{ display: 'contents' }}>
        <Component {...pageProps} />
        {isHome && <ThemeToggle variant="hero" />}
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
