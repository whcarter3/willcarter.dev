import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import RadialGradient from '@/components/radialGradient';
import Nav from '@/components/nav';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <>
      <Head>
        <title>Will Carter Dev</title>
        <meta name="description" content="A Portfolio Website for William H Carter III" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Nav transparent />
      <RadialGradient>
        <div className="h-full w-full flex items-center justify-center p-4 lg:p-0">
          <h1 className="text-2xl lg:text-[2.5rem] text-fg-1 text-center lg:text-left leading-snug font-heading">
            <Link href="/contact" className="border-b-2 border-fg-1 font-heading hover-shadow">
              Hello!
            </Link>{' '}
            <br className="lg:hidden" />
            My name is{' '}
            <Link href="/about" className="border-b-2 border-fg-1 font-heading hover-shadow">
              Will Carter
            </Link>
            ,
            <br />
            <TypeAnimation
              sequence={[
                'and I am a Frontend engineer.',
                800,
                'and I am an accessibility advocate.',
                600,
                'and I am a perfexoinst.',
                320,
                'and I am a perfectionist.',
                800,
                'and I am a father.',
                420,
                'and I am a gamer.',
                420,
                'and I am a disc golfer.',
                420,
                'and I am a Frontend engineer.',
                420,
              ]}
              speed={35}
              wrapper="span"
              deletionSpeed={80}
            />
          </h1>
        </div>
      </RadialGradient>
    </>
  );
}
