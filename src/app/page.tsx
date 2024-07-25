import Image from 'next/image';
import styles from './page.module.css';
import { About } from './components/blocks/about/about';
import { Map } from './components/blocks/map/map';
import Head from 'next/head';
import { Dogs } from './components/blocks/dogs/dogs';
import { Birds } from './components/blocks/birds/birds';
import { Steps } from './components/blocks/steps/steps';

export default function Home() {
  return (
    <>
      <Head>
        <title>damn!</title>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossOrigin=''
          key='leaflet'
        />
      </Head>
      <main>
        <About />
        <Map />
        <Steps />
        <Birds />
        <Dogs />
      </main>
    </>
  );
}
