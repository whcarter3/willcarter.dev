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
}

function Footer({ className }: FooterProps): JSX.Element {
  return (
    <IconContext.Provider
      value={{ className: 'text-3xl text-brand-darker' }}
    >
      <footer
        className={`${className} absolute bottom-0 left-0 w-full flex justify-center py-5`}
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
