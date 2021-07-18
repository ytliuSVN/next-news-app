import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ webTitle, headline, thumbnail, bgColor }) {
  const blankCard = () => {
    return (
      <div className={styles.fake}>
        <div className={styles.logo}></div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        {thumbnail ? (
          <img className={styles.figure_img} src={thumbnail} />
        ) : (
          blankCard()
        )}
        <figcaption className={styles.figcaption}>
          <div className={styles.webTitle}>
            <h3>{webTitle}</h3>
          </div>

          <div className={styles.headline}>
            <p>{headline}</p>
          </div>
        </figcaption>
      </figure>
      <div
        className={styles.baseline}
        style={{ background: `${bgColor || '#d32f2f'}` }}
      ></div>
    </div>
  );
}

Card.propTypes = {
  webTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Card;
