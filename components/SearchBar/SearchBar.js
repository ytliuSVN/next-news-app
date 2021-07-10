import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const { publicRuntimeConfig } = getConfig();

  const [expand, setExpand] = useState(false);
  const [focused, setFocused] = useState(false);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const keyUpHandler = () => {
    if (!searchTerm) setExpand(false);
  };

  const onFocus = () => {
    setFocused(true);
    setExpand(true);
  };

  const onBlur = () => {
    setFocused(false);
    setExpand(false);
  };

  const clickHandler = () => {
    setExpand(!expand);
  };

  /*
  useEffect(() => {
    setIsLoading(true);
    axios(
      `${publicRuntimeConfig.GUARDIAN_API_URL}search?page=${page}&page-size=15&q=${searchTerm}&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Error getting news data: ' + error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [searchTerm, page]);
  */

  return (
    <div className={styles.search}>
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
          onChange={handleChange}
          onKeyUp={keyUpHandler}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <div className={styles.searchBtn} onClick={clickHandler}>
        <div className={styles.searchIcon}></div>
      </div>
    </div>
  );
}

export default SearchBar;
