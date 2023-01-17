import { useForm, ValidationError } from '@formspree/react';

function ContactForm(): JSX.Element {
  const [state, handleSubmit] = useForm('mzbqzeya');
  if (state.succeeded) {
    return <p>Message sent successfully!</p>;
  }
  return (
    <form
      name="contact-form"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <div>
        <label htmlFor="full-name">
          <span className="block">Full Name</span>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Rick Astley"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </label>
      </div>

      <div>
        <label htmlFor="email-address">
          <span>Email Address</span>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="bender@isgreat.com"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          <span>Message</span>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Get rid of the Seaward. Lucille: I'll leave when I'm good and ready."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
      </div>
      <input
        type="hidden"
        name="_subject"
        id="email-subject"
        value="Contact Form Submission from willcarter.dev"
      />
      <button
        type="submit"
        value="Submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
