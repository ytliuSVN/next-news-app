import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { SearchBar } from '../index';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a onClick={props.onClick}>
              <Image
                src='/assets/KaiOS-Logo.svg'
                alt='KaiOS Logo'
                width={142}
                height={56}
              />
            </a>
          </Link>
        </div>
        <div className={styles.search}>
          <SearchBar {...props} />
        </div>
      </div>
    </header>
  );
}

export default Header;
