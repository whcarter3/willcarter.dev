import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { PT_Mono, Source_Sans_3 } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Analytics } from '@vercel/analytics/next';

const ptMono = PT_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <ThemeProvider>
      {/* Font variables live on :root so tokens.css composites
          (--font-heading, --font-body, --font-mono) can resolve them. */}
      <style jsx global>{`
        :root {
          --font-pt-mono: ${ptMono.style.fontFamily};
          --font-source-sans-pro: ${sourceSans3.style.fontFamily};
        }
      `}</style>
      <div className="font-body" style={{ display: 'contents' }}>
        <Component {...pageProps} />
        {isHome && <ThemeToggle variant="hero" />}
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
