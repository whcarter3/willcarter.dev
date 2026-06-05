import classNames from 'classnames';

interface TagPillProps {
  children: React.ReactNode;
  sun?: boolean;
}

export default function TagPill({ children, sun }: TagPillProps) {
  return (
    <span className={classNames('tag', sun && 'tag-sun')}>
      {children}
    </span>
  );
}
