import { useCallback, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Header, Footer, Loader, Card, Button, ScrollToTop } from '../index';
import styles from './Layout.module.scss';
import useNewsSearch from '../Hooks/useNewsSearch';

function Layout({ children }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { news, hasMore, loading, error } = useNewsSearch(searchTerm, page);
  const observer = useRef();

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // 3-column layout grid
  const searchCards = (content, bgColor) => {
    return (
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content.map((item, idx) => (
            <Link
              key={idx}
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

          {searchCards(news, '#d32f2f')}

          {loading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}
          {/* {error && <p>Error!</p>} */}
          <div ref={observer} />
        </main>
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
