import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaiOS News</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Home page</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
