import Head from 'next/head';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Bookmarks.module.scss';

function Bookmarks() {
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Bookmarks</title>
      </Head>

      <main>
        <div className={styles.heading}>
          <h1>All Bookmark</h1>
          <div className={styles.toolkit}></div>
        </div>
      </main>
    </div>
  );
}

export default Bookmarks;
