import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  imgSize: number;
  className?: string;
}

const Card = ({
  image,
  title,
  description,
  link,
  linkText,
  imgSize,
  className,
}: CardProps) => {
  return (
    <div className="card rounded-md">
      <div className="flex">
        <Image
          src={image}
          alt={title}
          width={imgSize}
          height={imgSize}
          className={classNames('rounded-md mr-5', className)}
        />
        <div>
          <h3 className="text-2xl">{title}</h3>
          <Link
            href={link}
            className="border-brand-darker border-b-2 hover-shadow"
          >
            {linkText}
          </Link>
        </div>
      </div>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default Card;
