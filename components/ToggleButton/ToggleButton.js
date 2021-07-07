import styles from './ToggleButton.module.scss';

function ToggleButton({ children, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    </div>
  );
}

export default ToggleButton;
