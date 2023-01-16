import Link from 'next/link';
import Image from 'next/image';

interface NavProps {
  className?: string;
}

function Nav({ className }: NavProps): JSX.Element {
  return (
    <nav
      className={`${className} px-5 py-5 w-full fixed top-0 left-0 z-10`}
    >
      <div className="container flex justify-between mx-auto">
        <Link href="/">
          <Image
            src={'/logo-square.png'}
            width={100}
            height={100}
            alt="Will Carter Dev Logo"
          />
        </Link>
        <div>
          <Link href="/works" className="font-heading text-xl mr-5">
            Works
          </Link>
          <Link href="/about" className="font-heading text-xl mr-5">
            About
          </Link>
          <Link href="/contact" className="font-heading text-xl mr-5">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
