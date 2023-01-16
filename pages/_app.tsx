import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PT_Mono, Source_Sans_Pro } from '@next/font/google';

const ptMono = PT_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt-mono',
});

const sourceSansPro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ptMono.variable} ${sourceSansPro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
