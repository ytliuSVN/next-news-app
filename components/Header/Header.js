import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/assets/KaiOS-Logo.svg'
              alt='KaiOS Logo'
              width={142}
              height={56}
            />
          </Link>
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
