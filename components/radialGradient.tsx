import GradientSurface from './GradientSurface';

type RadialGradientProps = {
  className?: string;
  children?: React.ReactNode;
};

function RadialGradient({ children, className }: RadialGradientProps) {
  return (
    <GradientSurface as="section" baseClass="hero" className={className}>
      {children}
    </GradientSurface>
  );
}

export default RadialGradient;
