import Head from 'next/head';

import MobileAppsPage from '@components/Services/MobileApps';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          iOS/Android App Design and Development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us 
        build beautifully designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | iOS/Android App Development"
        />
      </Head>
      <MobileAppsPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
