import Head from 'next/head';
import { Select } from '../components';
import styles from '../styles/Bookmarks.module.scss';

function Bookmarks() {
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Bookmarks</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.heading}>
          <h1>All Bookmark</h1>
          <div className={styles.toolkit}>
            <Select />
          </div>
        </div>
      </main>

      <div className={styles.empty}>
        <div className={styles.icon}></div>
        <h2>OOPS!</h2>
        <h4>We could not find what you were looking for.</h4>
      </div>
    </div>
  );
}

export default Bookmarks;
