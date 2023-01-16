import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

function Layout({ children, className }: LayoutProps): JSX.Element {
  return (
    <div className={`${className} mt-[140px] p-5`}>
      <Nav className="bg-gradient shadow-lg" />
      <div className="container mx-auto">{children}</div>
      <Footer className="bg-gradient shadow-lg" />
    </div>
  );
}

export default Layout;
