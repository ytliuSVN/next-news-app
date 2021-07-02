import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <span>
              <Image
                src='/assets/KaiOS-Logo.svg'
                alt='KaiOS Logo'
                width={142}
                height={56}
              />
            </span>
          </a>
        </Link>
      </div>
      <div className='header_search'></div>
    </header>
  );
}

export default Header;
