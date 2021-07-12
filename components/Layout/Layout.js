import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
import { Header, Footer } from '../index';

function Layout({ children }) {
  const { publicRuntimeConfig } = getConfig();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios(
      `${publicRuntimeConfig.GUARDIAN_API_URL}search?page=${page}&page-size=15&q=${searchTerm}&show-fields=body,headline,thumbnail&api-key=${publicRuntimeConfig.GUARDIAN_API_KEY}`
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Error getting news data: ' + error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [searchTerm, page]);

  const searchResult = () => {
    return (
      <div className='container'>
        <main>Search Result</main>
      </div>
    );
  };

  return (
    <div className='content'>
      <Header onChange={handleSearch} searchTerm={searchTerm} />
      {!searchTerm ? children : searchResult()}
      <Footer />
    </div>
  );
}

export default Layout;
