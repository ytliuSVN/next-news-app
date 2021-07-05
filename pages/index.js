import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import styles from '../styles/Home.module.scss';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

function Home() {
  const { publicRuntimeConfig } = getConfig();
  const [isLoading, setIsLoading] = useState(true);

  const [sport, setSport] = useState([]);
  const [culture, setCulture] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    setIsLoading(true); //starts spinner

    // Top story section
    // const baseUrl_Top = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=8&section=news&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    // Category based news section
    const baseUrl_Sport = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=sport&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_Culture = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=culture&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_LifeStyle = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=lifeandstyle&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    const getSport = axios.get(baseUrl_Sport);
    const getCulture = axios.get(baseUrl_Culture);
    const getLifeStyle = axios.get(baseUrl_LifeStyle);

    axios
      .all([getSport, getCulture, getLifeStyle])
      .then(
        axios.spread((...allNews) => {
          // console.log(allNews)
          const allSport = allNews[0].data.response.results;
          const allCulture = allNews[1].data.response.results;
          const allLifeStyle = allNews[2].data.response.results;

          setSport(allSport);
          setCulture(allCulture);
          setLifeStyle(allLifeStyle);
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
        <main>
          <h1>Top Stories</h1>
          <section></section>

          <h2>Sports</h2>
          <section className={styles.grid_wrap}>
            <div className={styles.grid}>
              {sport.map((item) => (
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
                    />
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <h2>Culture</h2>
          <section className={styles.grid_wrap}>
            <div className={styles.grid}>
              {culture.map((item) => (
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
                    />
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <h2>Lifestyle</h2>
          <section className={styles.grid_wrap}>
            <div className={styles.grid}>
              {lifeStyle.map((item) => (
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
                    />
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </main>
      )}

      <ScrollToTop />
    </div>
  );
}

export default Home;
