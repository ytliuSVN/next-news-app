import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaiOS | News</title>
      </Head>

      <main className={styles.main}>
        <h1>Home page</h1>
      </main>
    </div>
  );
}

export default Home;
