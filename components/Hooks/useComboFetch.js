import { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';

function useComboFetch(sorting) {
  const { publicRuntimeConfig } = getConfig();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [sport, setSport] = useState([]);
  const [culture, setCulture] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    // Top story
    const baseUrl_News = `${publicRuntimeConfig.GUARDIAN_API_URL}search?order-by=${sorting}&page-size=8&section=news&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    // Category
    const baseUrl_Sport = `${publicRuntimeConfig.GUARDIAN_API_URL}search?order-by=${sorting}&page-size=3&section=sport&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_Culture = `${publicRuntimeConfig.GUARDIAN_API_URL}search?order-by=${sorting}&page-size=3&section=culture&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;
    const baseUrl_LifeStyle = `${publicRuntimeConfig.GUARDIAN_API_URL}search?order-by=${sorting}&page-size=3&section=lifeandstyle&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`;

    const getNews = axios.get(baseUrl_News);
    const getSport = axios.get(baseUrl_Sport);
    const getCulture = axios.get(baseUrl_Culture);
    const getLifeStyle = axios.get(baseUrl_LifeStyle);

    axios
      .all([getNews, getSport, getCulture, getLifeStyle])
      .then(
        axios.spread((...news) => {
          // console.log(news)
          const allNews = news[0].data.response.results;
          const allSport = news[1].data.response.results;
          const allCulture = news[2].data.response.results;
          const allLifeStyle = news[3].data.response.results;

          setNews(allNews);
          setSport(allSport);
          setCulture(allCulture);
          setLifeStyle(allLifeStyle);

          setLoading(false);
        })
      )
      .catch((error) => {
        setError(true);
      });
  }, [sorting]);

  return { loading, error, news, sport, culture, lifeStyle };
}

export default useComboFetch;
