import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

function SearchBar(props) {
  const [expand, setExpand] = useState(false);

  const keyUpHandler = () => {
    if (!props.searchTerm) setExpand(false);
  };

  const onFocus = () => {
    setExpand(true);
  };

  const onBlur = () => {
    setExpand(false);
  };

  const clickHandler = () => {
    setExpand(!expand);
  };

  return (
    <div
      className={expand ? `${styles.search} ${styles.expand}` : styles.search}
    >
      <div
        className={
          expand
            ? `${styles.searchInputs} ${styles.active}`
            : styles.searchInputs
        }
      >
        <input
          type='text'
          placeholder='Search all news'
          onKeyUp={keyUpHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={props.onChange}
          value={props.searchTerm}
        />
      </div>
      <div className={styles.searchBtn} onClick={clickHandler}>
        <div className={styles.searchIcon}></div>
      </div>
    </div>
  );
}

export default SearchBar;
