import { useState, useRef } from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import {
  FaGithub,
  FaLinkedinIn,
  FaAngellist,
  FaCodepen,
} from 'react-icons/fa';

interface FooterProps {
  className?: string;
  home?: boolean;
}

function Footer({ className, home }: FooterProps): JSX.Element {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const gradient = `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffDD4a, #ff9000)`;
  const divRef = useRef<HTMLElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const divRect = divRef.current?.getBoundingClientRect();
    if (divRect) {
      setMouseX(e.clientX - divRect.left);
      setMouseY(e.clientY - divRect.top);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    setMouseX(e.touches[0].clientX);
    setMouseY(e.touches[0].clientY);
  };

  return (
    <IconContext.Provider
      value={{ className: 'text-3xl text-brand-darker' }}
    >
      <footer
        className={`${className} absolute bottom-0 left-0 w-full flex justify-center py-5`}
        style={{ background: home ? 'transparent' : gradient }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
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
