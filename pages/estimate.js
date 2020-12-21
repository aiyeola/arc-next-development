import Head from 'next/head';

import EstimatePage from '../src/components/EstimatePage';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          Free Custom Software Development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Use our free online estimate calculator to instantly check the
           cost of your custom software, mobile app, or website design and development project!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Free Estimate"
        />
      </Head>
      <EstimatePage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
