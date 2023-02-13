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

const footerLinks = [
  {
    href: 'https://github.com/whcarter3',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/carterthethird/',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://angel.co/u/whc-tre',
    icon: <FaAngellist />,
  },
  {
    href: 'https://codepen.io/carterthethird',
    icon: <FaCodepen />,
  },
];

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
        {footerLinks.map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            target={'_blank'}
            className="mr-5 filter-shadow"
          >
            {icon}
          </Link>
        ))}
      </footer>
    </IconContext.Provider>
  );
}

export default Footer;
