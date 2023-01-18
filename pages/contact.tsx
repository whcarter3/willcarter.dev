import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';
import Button from '@/components/button';
import Head from 'next/head';

const Contact = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Layout>
        <div className="grid grid-cols:1 md:grid-cols-2 gap-16 md:gap-5">
          <div>
            <h1 className="text-4xl">Drop me a message!</h1>
            <ContactForm />
          </div>
          <div>
            <h1 className="text-4xl mb-5">Sign the guestbook!</h1>
            <p className="text-2xl">
              You must authenticate with Github to sign the guestbook!
            </p>
            <Button className="mt-3">Login</Button>
            <div className="border-b-2 border-brand-darker mt-5 pb-2">
              <p className="text-xl">What a dope site!</p>
              <p className="text-sm">
                <span className="italic">Anonymous </span> | 17 Jan
                2022 @ 12:59 am
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
