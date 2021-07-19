import { useCallback, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Header,
  Footer,
  Loader,
  Card,
  Button,
  ScrollToTop,
  Select,
} from '../index';
import styles from './Layout.module.scss';
import useNewsSearch from '../Hooks/useNewsSearch';

function Layout({ children }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sorting, setSorting] = useState('newest');
  const { news, hasMore, loading, error } = useNewsSearch(
    searchTerm,
    page,
    sorting
  );
  const observer = useRef();
  const mountedRef = useRef(true);

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

  const handleSorting = (e) => {
    setSorting(e.target.value);
  };

  const handleReset = useCallback(async () => {
    setSearchTerm('');
  }, [mountedRef]);

  useEffect(() => {
    handleReset();
    return () => {
      mountedRef.current = false;
    };
  }, [handleReset]);

  // 3-column layout grid
  const searchCards = (content, bgColor) => {
    return (
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={{
                  pathname: '/article/',
                  query: { id: item.id },
                }}
              >
                <a
                  onClick={handleReset}
                  ref={
                    content.length === idx + 1 && content.length >= 15
                      ? lastNewsElementRef
                      : null
                  }
                >
                  <Card
                    webTitle={item.webTitle}
                    headline={item.fields.headline}
                    thumbnail={item.fields.thumbnail}
                    bgColor={bgColor}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    );
  };

  const getContent = () => {
    if ((!loading && !news?.length) || error) {
      return (
        <div className={styles.empty}>
          <div className={styles.icon}></div>
          <h2>OOPS!</h2>
          <h4>We could not find what you were looking for.</h4>
        </div>
      );
    }
    return (
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
            <Select onChange={handleSorting} orderBy={sorting} />
          </div>
        </div>

        {searchCards(news, '#d32f2f')}

        {loading && (
          <div className={styles.loading}>
            <Loader />
          </div>
        )}
      </main>
    );
  };

  const searchResult = () => {
    return (
      <div className='container'>
        {getContent()}

        <ScrollToTop />
      </div>
    );
  };

  return (
    <div className='content'>
      <Header
        onChange={handleSearch}
        searchTerm={searchTerm}
        onClick={handleReset}
      />
      {!searchTerm ? children : searchResult()}
      <Footer />
    </div>
  );
}

export default Layout;
