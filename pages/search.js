import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { Loader, Card, Button, ScrollToTop } from '../components';
import styles from '../styles/Search.module.scss';

function Search() {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {};

//   useEffect(() => {
//     setIsLoading(true); //starts spinner
//     axios(
//       `${publicRuntimeConfig.GUARDIAN_API_URL}search?page=1&page-size=15&q=mozilla&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`
//     )
//       .then((response) => {
//         console.log(response.data);
//         setAllData(response.data);
//         setFilteredData(response.data);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         console.log('Error getting fake data: ' + error);
//       })
//       .finally(function () {
//         setIsLoading(false);
//       });
//   }, []);

  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Search</title>
      </Head>

      {isLoading ? (
        <div className='loader-container'>
          <Loader />
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.heading}>
            <h1>Search results</h1>
            <div className={styles.toolkit}>
              <Button
                onClick={() => {
                  router.push('/bookmarks');
                }}
              >
                View Bookmark
              </Button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Search;
