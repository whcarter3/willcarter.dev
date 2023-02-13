import Link from 'next/link';
import Image from 'next/image';
import useGradient from '@/hooks/useGradient';
import Card from '@/components/card';
import Layout from '@/components/layout';

const Endorsements = [
  {
    image: '/images/gabePerez.jpeg',
    title: 'Gabe Perez',
    description:
      'Will made an immediate impact on our team and the projects he was involved in from his very first day. Will has an incredible ability to pick up new things fast and master them. On top of that, his curious mind allowed us to solve issues and build better products. His attention to detail and dedication were invaluable to the success of our goals. He is also a great colleague that will bring not only knowledge, but also teamwork, positivity, and joy, creating a positive environment to work in. Will would be an incredible asset to any team, project, and company.',
    link: 'https://www.linkedin.com/in/gabriel-perez-a703521a/',
    imgSize: 200,
  },
  {
    image: '/images/treyWhitson.jpeg',
    title: 'Trey Whitson',
    description:
      'I had the pleasure of having Will as a direct report for over 6 months at Mythical Games. Will is driven, knowledgeable, and has a true passion for what he does. Will has a knack for working and communicating with both technical and non-technical colleagues, being very thorough when gathering information, communicating to others, and executing. Not only is he an efficient contributor, he is sincerely a great person to work with.',
    link: 'https://www.linkedin.com/in/trey-whitson/',
    imgSize: 200,
    reverse: true,
  },
  {
    image: '/images/tomBoatman.jpeg',
    title: 'Tom Boatman',
    description:
      'Working with Will was a pleasure. I found his enthusiasm and creativity to be most intoxicating. He is constantly thinking of new and beneficial ways to approach work. When faced with a problem, he seeks an ideal solution and pursues it relentlessly. His strongest talents are visual storytelling, an ability to connect with people, and goal-oriented focus. Not only is he good with people, but he has an uncanny ability to identify a person’s needs and inspire them to reach their goals. He is enthusiastic about challenges and seeks perfection, but he is always willing to adapt his high standards to meet varying project parameters and client demands. I believe he would be an asset to any creative team.',
    link: 'https://www.linkedin.com/in/native/',
    imgSize: 200,
  },
];

const About = (): JSX.Element => {
  const [gradient, handleMove, ref] =
    useGradient<HTMLAnchorElement>();

  return (
    <>
      <Layout
        title="Will Carter - About Me"
        description="About Will Carter - A Senior Frontend Engineer"
      >
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
              small and large agencies, I&apos;ve worked with a wide
              variety of technologies, I&apos;ve built platforms from
              the ground up, and had the joy of teaching others
              &mdash; all to achieve my goal of having someone look at
              what I&apos;ve built and say, &quot;how cool!&quot;
            </p>

            <p className="mb-5">
              Outside of my career, I&apos;m a dedicated father,
              husband, Nintendo lover, sour skittles addict, disc
              golfer, and fantasy football nerd. It&apos;s nice to
              meet you. Let&apos;s build something cool together!
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl mb-5 mt-5 text-center">
            Endorsements
          </h2>
          <div className="grid grid-cols-1 gap-5 max-w-[800px] mx-auto">
            {Endorsements.map((item, index) => (
              <Card
                key={index}
                description={item.description}
                image={item.image}
                imgSize={item.imgSize}
                link={item.link}
                title={item.title}
                className="rounded-md"
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
