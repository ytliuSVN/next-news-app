import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Link from 'next/link';
import axios from 'axios';
import { Header, Footer, Loader, Card, Button, ScrollToTop } from '../index';
import styles from './Layout.module.scss';

function Layout({ children }) {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios(
      `${publicRuntimeConfig.GUARDIAN_API_URL}search?page=${page}&page-size=15&q=${searchTerm}&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`
    )
      .then((response) => {
        setData(response.data.response.results);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Error getting news data: ' + error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [searchTerm, page]);

  // 3-column layout grid
  const searchCards = (content, bgColor) => {
    return (
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: '/article/',
                query: { id: item.id },
              }}
            >
              <a onClick={() => setSearchTerm('')}>
                <Card
                  webTitle={item.webTitle}
                  headline={item.fields.headline}
                  thumbnail={item.fields.thumbnail}
                  bgColor={bgColor}
                />
              </a>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  const searchResult = () => {
    return (
      <div className='container'>
        {isLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <main className={styles.main}>
            <div className={styles.heading}>
              <h1>Search Result</h1>
              <div className={styles.toolkit}>
                <Button
                  onClick={() => {
                    router.push('/bookmarks');
                    setSearchTerm('');
                  }}
                >
                  View Bookmark
                </Button>
              </div>
            </div>

            {searchCards(data, '#d32f2f')}
          </main>
        )}
        <ScrollToTop />
      </div>
    );
  };

  return (
    <div className='content'>
      <Header onChange={handleSearch} searchTerm={searchTerm} />
      {!searchTerm ? children : searchResult()}
      <Footer />
    </div>
  );
}

export default Layout;
