import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

function Layout({ children, className }: LayoutProps): JSX.Element {
  return (
    <div
      className={`${
        className ? className : ''
      } mt-[115px] pb-[120px] p-6 relative`}
    >
      <Nav className="bg-gradient shadow-lg" />
      <div className="max-w-[1250px] mx-auto layout">{children}</div>
      <Footer className="bg-gradient shadow-lg" />
    </div>
  );
}

export default Layout;
