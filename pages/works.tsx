import Head from 'next/head';
import Layout from '@/components/layout';

const Works = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My Works</title>
      </Head>
      <Layout>
        <h1 className="text-4xl">My Work</h1>
        <p>This is a page about my work</p>
      </Layout>
    </>
  );
};

export default Works;
