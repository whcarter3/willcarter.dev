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
      className="card rounded-md flex"
    >
      <div
        className={classNames(
          reverse ? 'order-2' : 'order-1',
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
            reverse ? 'ml-5' : 'mr-5'
          )}
        />
        <div
          className={classNames(
            'flex flex-col',
            reverse ? 'items-end' : 'items-start'
          )}
        >
          <h3 className="text-2xl">{title}</h3>
          <Link href={link} className="hover-shadow">
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
