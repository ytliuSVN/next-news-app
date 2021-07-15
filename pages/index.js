import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Loader, Card, TinyCard, Button, ScrollToTop, Select } from '../components';
import styles from '../styles/Home.module.scss';
import useComboFetch from '../components/Hooks/useComboFetch';

function Home() {
  const router = useRouter();
  const { loading, error, news, sport, culture, lifeStyle } = useComboFetch();

  // Combo grid layout
  const sectionTopStory = (content) => {
    const primary = content.slice(0, 1);
    const secondary = content.slice(-3);
    const tertiary = content.slice(1, 3);
    const quaternary = content.slice(3, 5);

    return (
      <>
        <section className={styles.grid_wrap}>
          <div className={styles.grid}>
            {sectionCards(primary, '#388E3C')}
            <div>
              <div className={styles.grid}>
                {titleOnlyCards(tertiary, ['#D32F2F', '#FFC107'])}
                {titleOnlyCards(quaternary, ['#2196F3', '#388E3C'])}
              </div>
            </div>
          </div>
        </section>

        {sectionCards(secondary)}
      </>
    );
  };

  // Only title news card
  const titleOnlyCards = (content, bgColor) => {
    return (
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content.map((item, idx) => (
            <Link
              key={item.id}
              href={{
                pathname: '/article/',
                query: { id: item.id },
              }}
            >
              <a>
                <TinyCard webTitle={item.webTitle} bgColor={bgColor[idx]} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  // 3-column layout grid
  const sectionCards = (content, bgColor) => {
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
              <a>
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

  return (
    <div className='container'>
      <Head>
        <title>KaiOS | News</title>
      </Head>

      {loading ? (
        <div className='loader-container'>
          <Loader />
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.heading}>
            <h1>Top Stories</h1>
            <div className={styles.toolkit}>
              <Button
                onClick={() => {
                  router.push('/bookmarks');
                }}
              >
                View Bookmark
              </Button>
              <Select />
            </div>
          </div>

          {sectionTopStory(news)}

          <h2>Sports</h2>
          {sectionCards(sport, '#d32f2f')}

          <h2>Culture</h2>
          {sectionCards(culture, '#FFC107')}

          <h2>Lifestyle</h2>
          {sectionCards(lifeStyle, '#388E3C')}
        </main>
      )}

      <ScrollToTop />
    </div>
  );
}

export default Home;
