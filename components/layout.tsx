import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  narrowContainer?: boolean;
}

function Layout({ children, title, description, narrowContainer }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="app">
        <Nav />
        <main className="main">
          <div className={`container${narrowContainer ? ' container-narrow' : ''} py-12`}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
