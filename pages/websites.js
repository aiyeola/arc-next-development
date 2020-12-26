import Head from 'next/head';

import WebsitesPage from '@components/Services/Websites';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. 
          Optimized code, sever-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Websites"
        />
      </Head>
      <WebsitesPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
