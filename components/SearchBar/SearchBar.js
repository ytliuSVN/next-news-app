import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const { publicRuntimeConfig } = getConfig();

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios(
  //     `${publicRuntimeConfig.GUARDIAN_API_URL}search?page=${page}&page-size=15&q=${searchTerm}&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`
  //   )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log('Error getting news data: ' + error);
  //     })
  //     .finally(function () {
  //       setIsLoading(false);
  //     });
  // }, [searchTerm]);

  const clickHandler = () => {
    // expanded with animation
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type='text'
          placeholder='Search all news'
          onChange={handleChange}
        />
      </div>
      <div className={styles.searchBtn} onClick={clickHandler}>
        <div className={styles.searchIcon}></div>
      </div>
    </div>
  );
}

export default SearchBar;
