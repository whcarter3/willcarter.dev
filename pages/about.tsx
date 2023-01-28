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
              I love building cool things that live on the internet. I
              love the feeling of telling someone to pull out their
              phone and look at something I built. I started messing
              around with HTML when I was a kid in the late 90s, and
              then matured in customizing my Myspace profile with CSS
              in high school.
            </p>
            <p className="mb-5">
              After college I became a portrait photographer, and then
              started working in social media for a music festival
              production company. Wanting a transition in my career, I
              started teaching myself Javascript, then enrolled at
              General Assembly for the Full Stack Development
              Immersive in 2014.
            </p>
            <p className="mb-5">
              Fast forward a few years &mdash; I&apos;ve worked at
              small and large agencies. I&apos;ve worked with variety
              of technologies, built platforms from the ground up, and
              had the joy of teaching others &mdash; all to achieve my
              goal of having someone look at what I&apos;ve built and
              say, &quot;how cool!&quot;
            </p>

            <p className="mb-5">
              Outside of my career, I&apos;m a dedicated father,
              husband, Nintendo lover, sour skittles addict, disc
              golfer, and fantasy football nerd. It&apos;s nice to
              meet you. Let&apos;s build something cool together!
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
