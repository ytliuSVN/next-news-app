import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {};

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input type='text' placeholder='Search all news' />
        <div className={styles.searchBtn}>
          <div className={styles.searchIcon}></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
