import styles from './Card.module.scss';

function Card({ webTitle, headline, thumbnail, bgColor }) {
  return (
    <>
      <figure className={styles.figure}>
        <img
          className={styles.figure_img}
          src={thumbnail || 'https://via.placeholder.com/500x300'}
        />
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
    </>
  );
}

export default Card;
