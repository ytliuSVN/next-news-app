import Head from 'next/head';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { Loader, Card, Button, ScrollToTop } from '../components';
import styles from '../styles/Search.module.scss';

function Search() {
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Search</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.heading}>
          <h1>Search results</h1>
          <div className={styles.toolkit}></div>
        </div>
      </main>
    </div>
  );
}

export default Search;
