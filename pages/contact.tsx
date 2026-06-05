import Layout from '@/components/layout';
import ContactForm from '@/components/contactForm';

const Contact = (): JSX.Element => {
  return (
    <Layout
      title="Will Carter - Contact"
      description="How to Contact Will Carter - Senior Frontend Engineer"
      narrowContainer
    >
      <p className="eyebrow mb-2">Let&apos;s talk</p>
      <h1 className="text-4xl font-heading mb-3">Say hello</h1>
      <p className="text-fg-2 mb-8">
        Got a cool idea, a question, or just want to say hi? Drop me a message.
      </p>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
