import Head from 'next/head';
import getConfig from 'next/config';
import Image from 'next/image';
import styles from '../styles/Article.module.scss';
function Article({ news }) {
  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Article</title>
      </Head>

      <main>
        <article>
          <button type='button'>Click Me!</button>
          <article>
            <p>{news.webPublicationDate}</p>
            <h1>{news.webTitle}</h1>
            <h4>{news.fields.headline}</h4>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: news.fields.body }} />
          </article>

          <article>
            <Image
              src={news.fields.thumbnail}
              alt='Article media'
              width={445}
              height={267}
            />
            <p>{news.fields.headline}</p>
          </article>
        </article>
      </main>
    </div>
  );
}

Article.getInitialProps = async ({ query }) => {
  const { publicRuntimeConfig } = getConfig();
  const { id } = query;
  const baseUrl = `${publicRuntimeConfig.GUARDIAN_API_URL}${id}?show-elements=image&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
  const res = await fetch(baseUrl);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { news: data.response.content };
};

export default Article;
