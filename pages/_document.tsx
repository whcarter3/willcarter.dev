import { Html, Head, Main, NextScript } from 'next/document'
import { ptMono, sourceSans3 } from '@/lib/fonts'

export default function Document() {
  return (
    <Html lang="en" className={`${ptMono.variable} ${sourceSans3.variable}`}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('wc-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||p);})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
