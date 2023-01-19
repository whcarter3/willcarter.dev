import Head from 'next/head';
import classNames from 'classnames';
import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  description: string;
}

function Layout({
  children,
  className,
  title,
  description,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div
        className={classNames(
          className && className,
          'mt-[115px] pb-[120px] p-6 relative'
        )}
      >
        <Nav className="bg-gradient shadow-lg" />
        <div className="max-w-[1250px] mx-auto layout">
          {children}
        </div>
        <Footer className="bg-gradient shadow-lg" />
      </div>
    </>
  );
}

export default Layout;
