import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PT_Mono } from '@next/font/google';

const ptMono = PT_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ptMono.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
