import Head from 'next/head';

import RevolutionPage from '@components/RevolutionPage';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          The Revolution - Cutting Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | The Revolution"
        />
      </Head>
      <RevolutionPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
