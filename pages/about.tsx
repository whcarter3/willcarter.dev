import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout';
import useGradient from '@/hooks/useGradient';

const About = (): JSX.Element => {
  const [gradient, handleMove, ref] =
    useGradient<HTMLAnchorElement>();

  return (
    <>
      <Layout
        title="Will Carter - About Me"
        description="About Will Carter - A Senior Frontend Engineer"
      >
        <div className="flex justify-between items-center mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="col-span-1">
            <Image
              src="/images/will-carter.jpeg"
              alt="Will Carter"
              className="rounded-md mb-5"
              width={500}
              height={500}
            />
            <Link
              href="will-carter-resume.pdf"
              className="button inline-block"
              style={{ background: gradient }}
              rel="noopener noreferrer"
              target="_blank"
              ref={ref}
              onMouseMove={handleMove.onMouseMove}
              onTouchMove={handleMove.onTouchMove}
            >
              Download My Resume
            </Link>
          </div>
          <div className="col-span-2">
            <h1 className="text-4xl mb-3">About me</h1>
            <p className="mb-5">
              As a front-end developer, I bring a passion for creating
              visually stunning and intuitive web experiences. I have
              been creating websites and applications professionally
              since 2014. Throughout my career I have worked with a
              variety of frameworks and libraries, most recently
              utilizing React, Typescript, and Next.JS. I enjoy
              collaborating with project stakeholders including
              project managers, designers, and marketing teams in
              order to turn designs into responsive, mobile-friendly
              websites that perform well on all devices.
            </p>
            <p className="mb-5">
              In addition to my technical skills, I am an advocate for
              accessibility. I believe that the web should be
              accessible to everyone, regardless of their abilities,
              and I strive to ensure that all of the websites I build
              are inclusive and user-friendly for all.
            </p>
            <p className="mb-5">
              In my free time, I am a dedicated father who enjoys
              spending time with my family. I have a passion for disc
              golf and can often be found on the course on weekends. I
              am also an avid gamer and, pre-fatherhood, I streamed my
              gaming content live on Twitch and have a YouTube channel
              where I posted videos of my gaming adventures{' '}
              <em>(@zzayphod if you&apos;re curious)</em>. These days,
              I am more of a casual gamer, but I still enjoy playing
              games with my friends and family.
            </p>

            <p className="mb-5">
              Let&apos;s see how you and I can work together! Make
              sure to drop me a{' '}
              <Link
                href="/contact"
                className="border-b-2 border-brand-darker"
              >
                Contact
              </Link>
              , check out my recent{' '}
              <Link
                href="/works"
                className="border-b-2 border-brand-darker"
              >
                work
              </Link>
              , and I look forward to hearing from you!
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
