import Head from 'next/head';

import AboutPage from '@components/AboutPage';

export default function Index({ setValue }) {
  return (
    <>
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <link rel="canonical" key="canonical" />
        <meta
          name="description"
          key="description"
          content="We provide the most fastest, most modern, affordable, and aesthetic software design services in MidWest.
        Get a free online estimate now!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | About Us"
        />
        <meta property="og:url" key="og:url" content="" />
      </Head>
      <AboutPage setValue={setValue} />;
    </>
  );
}
