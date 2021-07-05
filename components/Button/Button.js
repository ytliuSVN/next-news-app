import styles from './Button.module.scss';

function Button({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <button className={styles.btn}>{children}</button>
    </div>
  );
}

export default Button;
