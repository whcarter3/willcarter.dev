import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';
import Guestbook from '@/components/guestbook';
import { prisma } from '@/lib/prisma';
import { Entry } from '@/lib/types';

const Contact = ({
  fallbackData,
}: {
  fallbackData: Entry[];
}): JSX.Element => {
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
    email: entry.email,
    body: entry.body,
    created_by: entry.created_by,
    created_at: entry.created_at,
    updated_at: entry.updated_at,
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}

export default Contact;
