import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaiOS News</title>
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a>
          <span className={styles.logo}>
            <Image
              src='/assets/KaiOS-Logo.svg'
              alt='KaiOS Logo'
              width={142}
              height={56}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
