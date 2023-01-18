import { useForm, ValidationError } from '@formspree/react';
import Button from './button';
import Link from 'next/link';

function ContactForm(): JSX.Element {
  const [state, handleSubmit] = useForm('mzbqzeya');
  if (state.succeeded) {
    return (
      <>
        <p className="mt-5 text-xl">Woohoo! Thanks for the mail!</p>
        <p className="my-5 text-xl">
          Here&apos;s a random youtube video for you:
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </>
    );
  }
  return (
    <form
      name="contact-form"
      onSubmit={handleSubmit}
      className="contact-form md:max-w-md"
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
        value="willcarter.dev: New message!"
      />
      <Button
        type="submit"
        className="button"
        value="Submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
