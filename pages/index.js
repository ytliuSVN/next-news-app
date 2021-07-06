import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import styles from '../styles/Home.module.scss';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

function Home() {
  const { publicRuntimeConfig } = getConfig();
  const [isLoading, setIsLoading] = useState(true);
  const [news, seTopStory] = useState([]);
  const [sport, setSport] = useState([]);
  const [culture, setCulture] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    setIsLoading(true); //starts spinner

    // Category based news section
    const baseUrl_Sport = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=sport&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_Culture = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=culture&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_LifeStyle = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=lifeandstyle&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    // Top story section
    const baseUrl_TopStory = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=8&section=news&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    const getSport = axios.get(baseUrl_Sport);
    const getCulture = axios.get(baseUrl_Culture);
    const getLifeStyle = axios.get(baseUrl_LifeStyle);
    const getTopStory = axios.get(baseUrl_TopStory);

    axios
      .all([getSport, getCulture, getLifeStyle, getTopStory])
      .then(
        axios.spread((...allNews) => {
          // console.log(allNews)
          const allSport = allNews[0].data.response.results;
          const allCulture = allNews[1].data.response.results;
          const allLifeStyle = allNews[2].data.response.results;
          const getTopStory = allNews[3].data.response.results;

          setSport(allSport);
          setCulture(allCulture);
          setLifeStyle(allLifeStyle);
          seTopStory(getTopStory);
        })
      )
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      })
      .finally(function () {
        setIsLoading(false); // stop spinner (in response/error)
      });
  };

  // combo grid layout
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
                <span>4-col 1</span>
                <span>4-col 2</span>
                <span>4-col 3</span>
                <span>4-col 4</span>
              </div>
            </div>
          </div>
        </section>

        {sectionCards(secondary)}
      </>
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

      {isLoading ? (
        <div className='loader-container'>
          <Loader />
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.heading}>
            <h1>Top Stories</h1>
            <div className={styles.toolkit}>
              <Link href='/bookmarks'>
                <a>
                  <Button>View Bookmark</Button>
                </a>
              </Link>
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
