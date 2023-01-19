import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import logoImage from '/public/logo-square.png';
import useGradient from '@/hooks/useGradient';

interface NavProps {
  className?: string;
  home?: boolean;
}

function Nav({ className, home }: NavProps): JSX.Element {
  const router = useRouter();

  const [gradient, handleMove, ref] = useGradient<HTMLDivElement>();

  return (
    <nav
      className={`${className} px-5 py-5 w-full fixed top-0 left-0 z-10`}
      style={{ background: home ? 'transparent' : gradient }}
      ref={ref}
      onMouseMove={handleMove.onMouseMove}
      onTouchMove={handleMove.onTouchMove}
    >
      <div className="max-w-[1250px] flex justify-between items-center mx-auto">
        <Link href="/">
          <Image
            src={logoImage}
            width={75}
            height={75}
            alt="Will Carter Dev Logo"
          />
        </Link>
        <div>
          <Link
            href="/works"
            className={classNames(
              'font-heading mx:text-xl mr-5 pb-1',
              router.pathname === '/works' &&
                'border-b-2 border-brand-darker'
            )}
          >
            Works
          </Link>
          <Link
            href="/about"
            className={classNames(
              'font-heading mx:text-xl mr-5 pb-1',
              router.pathname === '/about' &&
                'border-b-2 border-brand-darker'
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={classNames(
              'font-heading mx:text-xl mr-5 pb-1',
              router.pathname === '/contact' &&
                'border-b-2 border-brand-darker'
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
