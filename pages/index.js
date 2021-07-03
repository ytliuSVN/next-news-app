import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import getConfig from 'next/config';
import Card from '../components/Card/Card';
import styles from '../styles/Home.module.scss';

function Home() {
  const { publicRuntimeConfig } = getConfig();
  const [sport, setSport] = useState([]);
  const [culture, setCulture] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    // Top story section
    // const baseUrl_Top = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=8&section=news&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    // Category based news section
    const baseUrl_Sport = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=sport&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_Culture = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=culture&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_LifeStyle = `${publicRuntimeConfig.GUARDIAN_API_URL}search?page-size=3&section=lifeandstyle&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    const getSport = axios.get(baseUrl_Sport);
    const getCulture = axios.get(baseUrl_Culture);
    const getLifeStyle = axios.get(baseUrl_LifeStyle);

    axios.all([getSport, getCulture, getLifeStyle]).then(
      axios.spread((...allNews) => {
        // console.log(allNews)

        const allSport = allNews[0].data.response.results;
        const allCulture = allNews[1].data.response.results;
        const allLifeStyle = allNews[2].data.response.results;

        setSport(allSport);
        setCulture(allCulture);
        setLifeStyle(allLifeStyle);
      })
    );
  };

  return (
    <div className='container'>
      <Head>
        <title>KaiOS | News</title>
      </Head>

      <main>
        <h1>Top Stories</h1>
        <section>
          {/* <Card /> */}
          {/* {users.map((user) => (
            <Link key={user.id}  href={{
              pathname: '/article/',
              query: { id: user.id }
            }}>
              <a className='single'>
                <h3>{user.name}</h3>
              </a>
            </Link>
          ))} */}
        </section>

        <h1>Sports</h1>
        <section></section>

        <h1>Culture</h1>
        <section></section>

        <h1>Life & Style</h1>
        <section></section>
      </main>
    </div>
  );
}

/*
export const getStaticProps = async () => {
  const GUARDIAN_API_KEY = process.env.GUARDIAN_API_KEY;
  const GUARDIAN_API_URL = process.env.GUARDIAN_API_URL;

  // Article page
  // const baseUrl = `${GUARDIAN_API_URL}food/2021/mar/16/cookies-brownies-and-savoury-bakes-for-park-breaks?show-elements=image&show-fields=body,headline&api-key=${GUARDIAN_API_KEY}`;

  const res = await fetch(baseUrl);
  const data = await res.json();

  return {
    props: { news: data },
  };
};
*/

export default Home;
