import React, { useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import PropTypes from 'prop-types';

function Toast({ bookmark, visible }) {
  const DELAY = 2500;
  const SAVED_TO_BOOKMARKS = 'saved to bookmarks';
  const REMOVED_FROM_BOOKMARKS = 'removed from bookmarks';

  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), DELAY);
    return () => {
      clearTimeout(timer);
    };
  }, [bookmark]);

  return (
    visible && (
      <div
        className={
          `${styles.toast}` +
          (bookmark ? ` ${styles.saved}` : ` ${styles.removed}`) +
          (show ? ` ${styles.show}` : ` ${styles.hide}`)
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
    )
  );
}

Toast.propTypes = {
  bookmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Toast;
