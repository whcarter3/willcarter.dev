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
  imgSize: number;
  className?: string;
  reverse?: boolean;
}

const Card = ({
  image,
  title,
  description,
  link,
  imgSize,
  className,
  reverse,
}: CardProps) => {
  const [gradient, handleMove, ref] = useGradient<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ background: gradient }}
      onMouseMove={handleMove.onMouseMove}
      onTouchMove={handleMove.onTouchMove}
      className="card rounded-md flex flex-col md:flex-row"
    >
      <div
        className={classNames(
          reverse ? 'md:order-2' : 'md:order-1',
          'shrink-0'
        )}
      >
        <Image
          src={image}
          alt={title}
          width={imgSize}
          height={imgSize}
          className={classNames(
            'rounded-md',
            className,
            reverse ? 'md:ml-5' : 'md:mr-5'
          )}
        />
        <div
          className={classNames(
            'flex md:flex-col',
            reverse ? 'md:items-end' : 'items-start',
            'mb-2 mt-1 md:mb-0 md:mt-0'
          )}
        >
          <h3 className="text-2xl">{title}</h3>
          <Link
            href={link}
            className="hover-shadow ml-3 mt-2 md:ml-0 md:mt-0"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <p className={classNames(reverse ? 'order-1' : 'order-2')}>
        {description}
      </p>
    </div>
  );
};

export default Card;
