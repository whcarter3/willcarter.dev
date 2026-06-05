import { useForm, ValidationError } from '@formspree/react';
import Button from './button';

function ContactForm() {
  const [state, handleSubmit] = useForm('mzbqzeya');

  if (state.succeeded) {
    return (
      <div className="card-sun mt-8 p-8 text-center fade-in">
        <h2 className="text-2xl mb-3">Message sent!</h2>
        <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form name="contact-form" onSubmit={handleSubmit}>
      <label className="field" htmlFor="full-name">
        <span className="field-label">Full Name</span>
        <input
          className="input"
          type="text"
          name="name"
          id="full-name"
          placeholder="Rick Astley"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label className="field" htmlFor="email-address">
        <span className="field-label">Email Address</span>
        <input
          className="input"
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="bender@isgreat.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label className="field" htmlFor="message">
        <span className="field-label">Message</span>
        <textarea
          className="textarea"
          rows={5}
          name="message"
          id="message"
          placeholder="Got a cool idea, a question, or just want to talk disc golf?"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>

      <input type="hidden" name="_subject" value="willcarter.dev: New message!" />

      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Send it'}
      </Button>
    </form>
  );
}

export default ContactForm;
