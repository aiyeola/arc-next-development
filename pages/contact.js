import Head from 'next/head';

import ContactPage from '../src/components/ContactPage';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process.
         Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Contact Us"
        />
      </Head>
      <ContactPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
