import Head from 'next/head';
import getConfig from 'next/config';
import Image from 'next/image';
import styles from '../styles/Article.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ToggleButton from '../components/ToggleButton/ToggleButton';
function Article({ news }) {
  const iconCalendar = (
    <FontAwesomeIcon icon={faCalendarAlt} color='#000000de' />
  );

  return (
    <div className='container'>
      <Head>
        <title>KaiOS | Article</title>
      </Head>

      <main>
        <article className={styles.wrapper}>
          <article className={styles.content_wrapper}>
            <ToggleButton>Add Bookmark</ToggleButton>
            <p className={styles.date}>
              {iconCalendar} {news.webPublicationDate}
            </p>
            <h2>{news.webTitle}</h2>
            <h4>{news.fields.headline}</h4>
            <hr className={styles.divider} />
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: news.fields.body }}
            />
          </article>

          <article className={styles.media_wrapper}>
            <Image
              src={news.fields.thumbnail}
              alt='Article media'
              width={500}
              height={300}
            />
            <p className={styles.figcaption}>{news.fields.headline}</p>
          </article>
        </article>
      </main>

      <ScrollToTop />
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
