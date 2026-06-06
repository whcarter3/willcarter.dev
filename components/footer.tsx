import Link from 'next/link';
import {
  FaGithub,
  FaLinkedinIn,
  FaCodepen,
  FaEnvelope,
} from 'react-icons/fa';
import useGradient from '@/hooks/useGradient';

const footerLinks = [
  {
    href: 'https://github.com/whcarter3',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/carterthethird/',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:hello@willcarter.dev',
    icon: <FaEnvelope />,
    label: 'Email',
  },
];

function Footer() {
  const [gradient, handlers, ref] = useGradient<HTMLElement>();

  return (
    <footer
      ref={ref}
      className="footer"
      style={gradient ? { background: gradient } : undefined}
      {...handlers}
    >
      <div className="footer-inner">
        {footerLinks.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={
              href.startsWith('mailto')
                ? undefined
                : 'noopener noreferrer'
            }
            className="footer-link"
            aria-label={label}
          >
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
