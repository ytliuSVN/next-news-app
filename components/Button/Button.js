import styles from './Button.module.scss';

function Button({ children, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    </div>
  );
}

export default Button;
