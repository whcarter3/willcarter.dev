import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import classNames from 'classnames';
import useGradient from '@/hooks/useGradient';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  reverse?: boolean;
}

const Card = ({ image, title, description, link, reverse }: CardProps) => {
  const [gradient, handlers, ref] = useGradient<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="endorsement-card card-sun"
      style={gradient ? { background: gradient } : undefined}
      {...handlers}
    >
      <div className={classNames('endorsement-inner', reverse && 'reverse')}>
        <div className="endorsement-avatar">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="avatar-round"
          />
        </div>
        <div className="endorsement-content">
          <div className="endorsement-name">
            {title}
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on LinkedIn`}
              className="hover-shadow"
            >
              <FaLinkedin />
            </Link>
          </div>
          <p className="endorsement-quote">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
