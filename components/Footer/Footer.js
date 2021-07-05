import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Powered by{' '}
        <a
          href='https://github.com/ytliuSVN'
          target='_blank'
          rel='noopener noreferrer'
        >
          @ytliuSVN
        </a>
      </span>
    </footer>
  );
}

export default Footer;
