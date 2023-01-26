import React, { useState, useRef, MouseEventHandler } from 'react';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import { User } from 'next-auth';
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import useGradient from '@/hooks/useGradient';
import Button from '@/components/button';

enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

type FormState = {
  state: Form;
  message?: string;
};

interface GuestbookProps {
  fallbackData: {};
}

interface GuestbookEntryProps {
  entry: { body: string; id: string; created_by: string };
  user: User;
}

function GuestbookEntry({ entry, user }: GuestbookEntryProps) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async () => {
    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    });

    mutate('/api/guestbook');
  };

  return (
    <div className="border-b-2 border-brand-darker mt-5 pb-3 px-1">
      <p className="text-xl">{entry.body}</p>
      <p className="text-sm">
        <span className="italic">{entry.created_by}</span> |{' '}
        {format(new Date(), "d MMM yyyy '@' h:mm bb")}
      </p>
      {user && entry.created_by === user.name && (
        <>
          <span className="text-gray-200 dark:text-gray-800">/</span>
          <button
            className="text-sm text-red-600 dark:text-red-400"
            onClick={deleteEntry}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default function Guestbook({ fallbackData }: GuestbookProps) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({
    state: Form.Initial,
  });
  const inputEl = useRef<HTMLInputElement>(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData,
  });
  const [gradient, handleMove, ref] =
    useGradient<HTMLAnchorElement>();

  const leaveEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    if (inputEl.current) {
      const res = await fetch('/api/guestbook', {
        body: JSON.stringify({
          body: inputEl.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        setForm({
          state: Form.Error,
          message: error,
        });
        return;
      }

      inputEl.current.value = '';
      mutate('/api/guestbook');
      setForm({
        state: Form.Success,
        message: 'Thanks for signing the guestbook!',
      });
    }
  };

  return (
    <>
      <p className="text-xl">
        Leave a message for future visitors of the site!
      </p>
      {!session && (
        <div>
          <Button
            className="mt-3 button"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Login
          </Button>
          <p className="mt-2">
            You must authenticate with Github to sign the guestbook.
          </p>
          <p>We only use your name and email to identify you.</p>
        </div>
      )}

      {session?.user && (
        <form onSubmit={leaveEntry} className="styled-form">
          <input
            id="entry"
            name="entry"
            required
            ref={inputEl}
            placeholder="Leave a message..."
          />
          <Button
            type="submit"
            className="button"
            disabled={form.state === Form.Loading}
          >
            {form.state === Form.Loading
              ? 'Loading...'
              : 'Sign Guestbook'}
          </Button>
          {form.state === Form.Error && (
            <p className="mt-2 text-red-600 dark:text-red-400">
              {form.message}
            </p>
          )}
          {form.state === Form.Success && (
            <p className="mt-2 text-green-600 dark:text-green-400">
              {form.message}
            </p>
          )}
        </form>
      )}

      <GuestbookEntry
        entry={{
          body: 'This is a test entry',
          created_by: 'Michael J. Fox',
          id: 'testid',
        }}
        user={{ name: 'test', id: 'someid' }}
      />
      <GuestbookEntry
        entry={{
          body: 'Boy Morty, you sure are a smart one. You know, I bet you could even figure out what this is.',
          created_by: 'Rick Sanchez',
          id: 'testid',
        }}
        user={{ name: 'test', id: 'someid' }}
      />
    </>
  );
}
