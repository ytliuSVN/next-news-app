import { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';

function useNewsSearch(searchTerm, page) {
  const { publicRuntimeConfig } = getConfig();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setNews([]);
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${publicRuntimeConfig.GUARDIAN_API_URL}search`,
      params: {
        page: page,
        'page-size': 15,
        q: searchTerm,
        'show-fields': 'body,headline,thumbnail',
        'api-key': publicRuntimeConfig.GUARDIAN_API_KEY,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prevNews) => {
          return [...new Set([...prevNews, ...res.data.response.results])];
        });
        setHasMore(res.data.response.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [searchTerm, page]);

  return { loading, error, news, hasMore };
}

export default useNewsSearch;