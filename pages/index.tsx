import Head from 'next/head';
import Image from 'next/image';
import { PT_Mono } from '@next/font/google';
import RadialGradient from '@/components/radialGradient';
import { TypeAnimation } from 'react-type-animation';

const ptMono = PT_Mono({ weight: '400', subsets: ['latin'] });

const baseSentence = 'And I am a ';

export default function Home() {
  return (
    <>
      <Head>
        <title>William H Carter III Portfolio</title>
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
        <RadialGradient>
          <Image
            src={'/logo-square.png'}
            width={100}
            height={100}
            alt="Will Carter Dev Logo"
            className="absolute top-3 left-3"
          />
          <div className="h-full w-full flex items-center justify-center p-4 lg:p-0">
            <h1
              className={`text-3xl lg:text-[3rem] text-brand-darker text-center lg:text-left leading-snug ${ptMono.className}`}
            >
              Hello! <br className="lg:hidden" />
              My name is Will Carter,
              <br />
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  'and I am a Frontend engineer.',
                  1500,
                  'and I am a React developer.',
                  1500,
                  'and I am an accessibility advocate.',
                  1500,
                  'and I am a perfexoinst.',
                  420,
                  'and I am a perfectionist.',
                  1500,
                  'and I am a father.',
                  1500,
                  'and I am a disc golfer.',
                  1500,
                  'and I am a fantasy football nerd.',
                  1500,
                  'and I am a Frontend engineer.',
                  1500,
                ]}
                speed={20} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                repeat={1} // Repeat this Animation Sequence infinitely
              />
            </h1>
          </div>
        </RadialGradient>
      </main>
    </>
  );
}
