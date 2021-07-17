import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import getConfig from 'next/config';

function useNewsSearch(searchTerm, page, sorting) {
  const { publicRuntimeConfig } = getConfig();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useMemo(() => {
    if (!searchTerm) return;
    setNews([]);
  }, [searchTerm, sorting]);

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
        'order-by': sorting,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prevNews) => {
          return [...new Set([...prevNews, ...res.data.response.results])];
        });
        setHasMore(res.data.response.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [searchTerm, page, sorting]);

  return { loading, error, news, hasMore };
}

export default useNewsSearch;
