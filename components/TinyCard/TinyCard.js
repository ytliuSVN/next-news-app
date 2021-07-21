import styles from './TinyCard.module.scss';
import PropTypes from 'prop-types';

function TinyCard({ webTitle, bgColor }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.webTitle}>
        <p>{webTitle}</p>
      </div>
      <div
        className={styles.baseline}
        style={{ background: `${bgColor || '#d32f2f'}` }}
      ></div>
    </div>
  );
}

TinyCard.propTypes = {
  webTitle: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default TinyCard;
