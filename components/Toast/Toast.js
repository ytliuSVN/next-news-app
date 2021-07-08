import styles from './Toast.module.scss';

function Toast({ bookmark }) {
  const SAVED_TO_BOOKMARKS = 'saved to bookmarks';
  const REMOVED_FROM_BOOKMARKS = 'removed from bookmarks';

  return (
    <div
      className={
        `${styles.toast}` +
        (bookmark ? ` ${styles.saved}` : ` ${styles.removed}`)
      }
    >
      <div
        className={
          `${styles.icon}` +
          (bookmark ? ` ${styles.saved_icon}` : ` ${styles.removed_icon}`)
        }
      ></div>
      <span className={styles.text}>
        {bookmark ? SAVED_TO_BOOKMARKS : REMOVED_FROM_BOOKMARKS}
      </span>
    </div>
  );
}

export default Toast;
