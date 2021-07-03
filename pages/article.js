import Head from 'next/head';
import { useRouter } from 'next/router';

function Article({ users }) {
  const { id } = useRouter().query;
  const target = users.filter((el) => el.id === +id);

  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Article</title>
      </Head>

      <main>
        <h1>Article Page</h1>
        {target.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.website}</p>
              <p>{user.address.city}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Article;

export const getStaticProps = async () => {
  const domain = 'https://jsonplaceholder.typicode.com';
  const res = await fetch(`${domain}/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data },
  };
};
