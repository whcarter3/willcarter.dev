import { PT_Mono, Source_Sans_3 } from 'next/font/google';

// Shared so _document can put the variable classes on <Html> — the html
// element is :root, which lets the tokens.css composites
// (--font-heading, --font-body, --font-mono) resolve these variables.
export const ptMono = PT_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt-mono',
  display: 'swap',
});

export const sourceSans3 = Source_Sans_3({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  display: 'swap',
});
