import Head from 'next/head';

import LandingPage from '../src/components/LandingPage';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine custom-designed from the ground up with cutting-edge optimizations.
         Use our free estimate calculator to check your project cost"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Arc Development"
        />
      </Head>
      <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
