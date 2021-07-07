import styles from './TinyCard.module.scss';

function TinyCard({ webTitle, bgColor }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.webTitle}>
        <h3>{webTitle}</h3>
      </div>
      <div
        className={styles.baseline}
        style={{ background: `${bgColor || '#d32f2f'}` }}
      ></div>
    </div>
  );
}

export default TinyCard;
