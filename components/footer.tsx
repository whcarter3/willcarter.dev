import { useState, useRef } from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import {
  FaGithub,
  FaLinkedinIn,
  FaAngellist,
  FaCodepen,
} from 'react-icons/fa';
import useGradient from '@/hooks/useGradient';

interface FooterProps {
  className?: string;
  home?: boolean;
}

function Footer({ className, home }: FooterProps): JSX.Element {
  const [gradient, handleMove, ref] = useGradient<HTMLDivElement>();

  return (
    <IconContext.Provider
      value={{ className: 'text-3xl text-brand-darker' }}
    >
      <footer
        className={`${className} absolute bottom-0 left-0 w-full flex justify-center py-5`}
        style={{ background: home ? 'transparent' : gradient }}
        ref={ref}
        onMouseMove={handleMove.onMouseMove}
        onTouchMove={handleMove.onTouchMove}
      >
        <Link
          href="https://github.com/whcarter3"
          target={'_blank'}
          className="mr-5"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/carterthethird"
          target={'_blank'}
          className="mr-5"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://angel.co/u/whc_tre"
          target={'_blank'}
          className="mr-5"
        >
          <FaAngellist />
        </Link>
        <Link
          href="https://codepen.io/carterthethird"
          target={'_blank'}
          className="mr-5"
        >
          <FaCodepen />
        </Link>
      </footer>
    </IconContext.Provider>
  );
}

export default Footer;
