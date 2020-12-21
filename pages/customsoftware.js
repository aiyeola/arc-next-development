import Head from 'next/head';

import CustomSoftwarePage from '../src/components/Services/CustomSoftware';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - 
        let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Custom Software Development"
        />
      </Head>
      <CustomSoftwarePage
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
}
