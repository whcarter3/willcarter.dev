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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RadialGradient>
          <div className="h-full w-full flex items-center justify-center p-4 lg:p-0">
            <div className="w-[1040px]">
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
                    'and I am a gamer.',
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
          </div>
        </RadialGradient>
      </main>
    </>
  );
}
