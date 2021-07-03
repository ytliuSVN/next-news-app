import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card/Card';
import styles from '../styles/Home.module.scss';

function Home({ news }) {
  // console.log(news);
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | News</title>
      </Head>

      <main>
        <h1>Top Stories</h1>
        <section>
          <Card />
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
        <section>222</section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const GUARDIAN_API_KEY = process.env.GUARDIAN_API_KEY;
  const GUARDIAN_API_URL = process.env.GUARDIAN_API_URL;

  // Top story section
  const baseUrl = `${GUARDIAN_API_URL}search?page-size=8&q=news&show-fields=body,headline,thumbnail&api-key=${GUARDIAN_API_KEY}`;

  // Category based news section [sport|culture|lifeandstyle] filter
  // const baseUrl = `${GUARDIAN_API_URL}search?page-size=3&q=lifeandstyle&show-fields=body,headline,thumbnail&api-key=${GUARDIAN_API_KEY}`;

  // Article page
  // const baseUrl = `${GUARDIAN_API_URL}food/2021/mar/16/cookies-brownies-and-savoury-bakes-for-park-breaks?show-elements=image&show-fields=body,headline&api-key=${GUARDIAN_API_KEY}`;

  const res = await fetch(baseUrl);
  const data = await res.json();

  return {
    props: { news: data },
  };
};

export default Home;
