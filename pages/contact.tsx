import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';

const Contact = (): JSX.Element => {
  return (
    <>
      <Layout
        title="Will Carter - Contact"
        description="How to Contact Will Carter - Senior Frontend Engineer"
      >
        <div className="grid grid-cols:1 gap-16">
          <div>
            <p className="text-4xl font-heading mb-5">
              Drop me a message
            </p>
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
