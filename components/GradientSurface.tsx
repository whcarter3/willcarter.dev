import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import useGradient from '@/hooks/useGradient';
import classNames from 'classnames';

type GradientSurfaceProps<T extends ElementType> = {
  as?: T;
  baseClass?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'baseClass' | 'className'>;

export default function GradientSurface<T extends ElementType = 'div'>({
  as,
  baseClass,
  className,
  style,
  children,
  ...rest
}: GradientSurfaceProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const [gradient, handlers, ref] = useGradient<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={classNames(baseClass, className)}
      style={{ ...(gradient ? { background: gradient } : {}), ...(style as React.CSSProperties ?? {}) }}
      {...handlers}
      {...rest}
    >
      {children}
    </Tag>
  );
}
