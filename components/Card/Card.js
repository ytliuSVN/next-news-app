import styles from './Card.module.scss';

function Card() {
  return (
    <>
      <figure className={styles.figure}>
        <img
          className={styles.figure_img}
          src='http://placekitten.com/500/300'
        />
        <figcaption className={styles.figcaption}>
          <h3>Sky News to launch dedicated regional Australia channel</h3>
          <p>
            I suppose if we couldn't laugh at things that don't make sense, we
            couldn't react to a lot of life.
          </p>
        </figcaption>
      </figure>
    </>
  );
}

export default Card;
