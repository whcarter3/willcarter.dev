import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import useGradient from '@/hooks/useGradient';
import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';
import Guestbook from '@/components/guestbook';

const Contact = (): JSX.Element => {
  const { data: session } = useSession();
  const [gradient, handleMove, ref] =
    useGradient<HTMLAnchorElement>();

  return (
    <>
      <Layout
        title="Will Carter - Contact"
        description="How to Contact Will Carter - Senior Frontend Engineer"
      >
        <div className="grid grid-cols:1 md:grid-cols-2 gap-16 md:gap-5">
          <div>
            <p className="text-4xl font-heading">Drop me a message</p>
            <ContactForm />
          </div>
          <div>
            <p className="text-4xl font-heading mb-5">
              Sign the guestbook
            </p>
            <Guestbook fallbackData={{}} />
            {/* {!session ? (
              <div>
                <p className="text-2xl">
                  You must authenticate with Github to sign the
                  guestbook.
                </p>
                <Link
                  href="/api/auth/signin"
                  className="mt-3 button inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn('github');
                  }}
                  ref={ref}
                  onMouseMove={handleMove.onMouseMove}
                  onTouchMove={handleMove.onTouchMove}
                  style={{ background: gradient }}
                >
                  Login
                </Link>
              </div>
            ) : (
              <p className="text-2xl">
                You are signed in as {session.user?.name}
                <button
                  className="button"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </p>
            )}
            <div className="border-b-2 border-brand-darker mt-5 pb-2">
              <p className="text-xl">What a dope site!</p>
              <p className="text-sm">
                <span className="italic">Anonymous </span> | 17 Jan
                2022 @ 12:59 am
              </p>
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
