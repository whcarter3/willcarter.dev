import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <h1 className="text-4xl">Drop me a message!</h1>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
