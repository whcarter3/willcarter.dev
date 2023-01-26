import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import useGradient from '@/hooks/useGradient';
import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';
import Guestbook from '@/components/guestbook';
import { prisma } from '@/lib/prisma';
import { Entry } from '@/lib/types';

interface GuestbookProps {
  id: string;
  body: string;
  created_by: string;
  updated_at: string;
}

const Contact = ({
  fallbackData,
}: {
  fallbackData: GuestbookProps[];
}): JSX.Element => {
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
            <p className="text-4xl font-heading mb-5">
              Drop me a message
            </p>
            <ContactForm />
          </div>
          <div>
            <p className="text-4xl font-heading mb-5">
              Sign the guestbook
            </p>
            <Guestbook fallbackData={fallbackData} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  });

  const fallbackData = entries.map((entry: Entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    created_at: entry.created_at?.toISOString(),
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}

export default Contact;
