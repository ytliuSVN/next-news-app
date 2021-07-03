import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card/Card';
import styles from '../styles/Home.module.scss';

function Home() {
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

          <style global jsx>{`
            .single {
              padding: 2px 16px;
              background: #e3e3e3;
              display: block;
              margin: 20px 10px;
              border-left: 8px solid #e3e3e3;
            }
            .single:hover {
              border-left: 8px solid #4979ff;
            }
          `}</style>
        </section>

        <h1>Sports</h1>
        <section>222</section>
      </main>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props: { users: data },
//   };
// };

export default Home;
