import Head from 'next/head';

import ServicesPage from '@components/Services';

export default function Index({ setValue, setSelectedIndex }) {
  return (
    <>
      <Head>
        <title key="title">
          Top Custom Development Services | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile, app and website development services with sleek custom designs - get free online estimate instantly!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Bringing West Coast Technology to the MidWest | Services"
        />
      </Head>
      <ServicesPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
}
