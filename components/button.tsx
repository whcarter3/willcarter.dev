import useGradient from '@/hooks/useGradient';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg';
  children: React.ReactNode;
}

const Button = ({ className, children, size, ...props }: ButtonProps) => {
  const [gradient, handlers, ref] = useGradient<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      className={classNames('btn', size === 'lg' && 'btn-lg', className)}
      style={gradient ? { background: gradient } : undefined}
      {...handlers}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
