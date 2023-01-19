import Head from 'next/head';
import Layout from '@/components/layout';

const Works = (): JSX.Element => {
  return (
    <>
      <Layout
        title="Will Carter - My Work"
        description="Portfolio of Works from Will Carter - Senior Frontend Engineer"
      >
        <h1 className="text-4xl">My Work</h1>
        <p>This is a page about my work</p>
      </Layout>
    </>
  );
};

export default Works;
