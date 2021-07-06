import styles from './Card.module.scss';

function Card({ webTitle, headline, thumbnail, bgColor }) {
  return (
    <>
      <figure className={styles.figure}>
        <img
          className={styles.figure_img}
          src={
            thumbnail ||
            'https://via.placeholder.com/1000x1000/5e0099/bb8fdde6?text=KaiOS'
          }
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
