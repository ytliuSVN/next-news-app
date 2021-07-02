import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

function Home({ users }) {
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | News</title>
      </Head>

      <main>
        <h1>Top Stories</h1>
        <section>111</section>

        <h1>Sports</h1>
        <section>222</section>
      </main>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
//   const data = await res.json();

//   return {
//     props: { users: data },
//   };
// };

export default Home;
