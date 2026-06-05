import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { PT_Mono, Source_Sans_3 } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

const ptMono = PT_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt-mono',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <ThemeProvider>
      <div className={`${ptMono.variable} ${sourceSans3.variable} font-body`} style={{ display: 'contents' }}>
        <Component {...pageProps} />
        {isHome && <ThemeToggle variant="hero" />}
      </div>
    </ThemeProvider>
  );
}
