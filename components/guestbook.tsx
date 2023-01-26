import React, { useState, useRef, MouseEventHandler } from 'react';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';
import { FaGithub } from 'react-icons/fa';
import fetcher from '@/lib/fetcher';
import useGradient from '@/hooks/useGradient';
import Button from '@/components/button';
const Filter = require('bad-words');

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

interface Entry {
  body: string;
  id: string;
  created_by: string;
  created_at?: string;
  updated_at?: string;
}

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

interface GuestbookProps {
  fallbackData: {
    body: string;
    id: string;
    created_by: string;
    updated_at: string;
  }[];
}

interface GuestbookEntryProps {
  entry: Entry;
  user: User | null | undefined;
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
      <p>{entry.body}</p>
      <p className="text-sm">
        {`${entry.created_by} | ${
          entry.updated_at
            ? format(
                new Date(entry.updated_at),
                "d MMM yyyy '@' h:mm aaa"
              )
            : ''
        }`}

        {user && entry.created_by === user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">
              {' '}
              |{' '}
            </span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default function Guestbook({ fallbackData }: GuestbookProps) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const filter = new Filter();
  const [form, setForm] = useState<FormState>({
    state: Form.Initial,
  });
  const inputEl = useRef<HTMLInputElement>(null);
  const { data: entries } = useSWR<Entry[]>(
    '/api/guestbook',
    fetcher,
    {
      fallbackData,
    }
  );
  const [gradient, handleMove, ref] =
    useGradient<HTMLAnchorElement>();

  const leaveEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    //this is to prevent inputEl.current.value from being null
    if (inputEl.current) {
      //this is to prevent the user from entering bad words
      if (filter.isProfane(inputEl.current.value)) {
        setForm({
          state: Form.Error,
          message: 'Profanity is not allowed',
        });
        return;
      }
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
    } else {
      setForm({
        state: Form.Error,
        message: 'Something went wrong',
      });
    }
  };

  return (
    <>
      <p className="font-heading mb-1">
        Leave a message for future visitors
      </p>
      {!session && (
        <div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            <FaGithub className="inline-block w-5 h-5 mr-2" />
            Login
          </Button>
        </div>
      )}
      {form.state === Form.Error && (
        <p className="my-2 text-red-600 dark:text-red-400">
          {form.message}
        </p>
      )}
      {form.state === Form.Success && (
        <p className="my-2 text-green-600 dark:text-green-400">
          {form.message}
        </p>
      )}

      {session?.user && (
        <form onSubmit={leaveEntry} className="styled-form">
          <input
            id="entry"
            name="entry"
            required
            ref={inputEl}
            placeholder="Your message here..."
          />
          <Button
            type="submit"
            disabled={form.state === Form.Loading}
          >
            {form.state === Form.Loading
              ? 'Loading...'
              : 'Sign Guestbook'}
          </Button>
        </form>
      )}
      <p className="mt-2">
        Your information is only used to display your name and reply
        by email.
      </p>

      <div className="mt-5">
        {entries?.map(
          (entry: {
            body: string;
            id: string;
            created_by: string;
          }) => (
            <GuestbookEntry
              key={entry.id}
              entry={entry}
              user={session?.user}
            />
          )
        )}
      </div>
    </>
  );
}
