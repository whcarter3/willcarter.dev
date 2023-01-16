import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import RadialGradient from '@/components/radialGradient';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function Home() {
  // Add a class to the body element on mount which prevents scrolling to enhance the gradient mouse/touchmove effect
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
        <meta
          name="description"
          content="A Portfolio Website for William H Carter III"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        <Nav className="fixed top-0 right-0 z-10" />
        <RadialGradient>
          <div className="h-full w-full flex items-center justify-center p-4 lg:p-0">
            <h1
              className={`text-2xl md:text-[1.875rem] lg:text-[2.5rem] text-brand-darker text-center lg:text-left leading-snug font-heading`}
            >
              Hello! <br className="lg:hidden" />
              My name is Will Carter,
              <br />
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  'and I am a Frontend engineer.',
                  1250,
                  'and I am a React developer.',
                  1250,
                  'and I am an accessibility advocate.',
                  1250,
                  'and I am a perfexoinst.',
                  420,
                  'and I am a perfectionist.',
                  1250,
                  'and I am a father.',
                  1250,
                  'and I am a gamer.',
                  1250,
                  'and I am a disc golfer.',
                  1250,
                  'and I am a fantasy football nerd.',
                  1250,
                  'and I am a Frontend engineer.',
                  1250,
                ]}
                speed={35} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                deletionSpeed={70}
              />
            </h1>
          </div>
          <Footer />
        </RadialGradient>
      </main>
    </>
  );
}
