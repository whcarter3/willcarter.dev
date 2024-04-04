import Layout from '@/components/layout';
import Image from 'next/image';

const Resume = (): JSX.Element => {
  return (
    <>
      <Layout
        title="Will Carter - My Work"
        description="Portfolio of Works from Will Carter - Senior Frontend Engineer"
      >
        <object
          type="application/pdf"
          data="/images/william-carter-resume.pdf"
          width="800"
          height="900"
          className="mx-auto w-full md:w-3/4 lg:w-1/2 aspect-[4/3]"
        />
      </Layout>
    </>
  );
};

export default Resume;
