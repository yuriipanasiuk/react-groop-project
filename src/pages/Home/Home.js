import { useEffect, useState } from 'react';

import Box from 'components/Box';
import Movies from 'components/Movies';
import Header from 'components/HomeHeader';
import Footer from 'components/Footer';

import { getTrendingMovie, searchMovie } from 'ApiService/ApiService';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [searchVideos, setSearchideos] = useState([]);
  const [query, seQuery] = useState('');

  const getSeachValue = data => {
    seQuery(data.text);
  };

  useEffect(() => {
    try {
      async function trendMovies() {
        const movies = await getTrendingMovie();
        setTrendMovies(movies);
      }
      trendMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      async function getMovies() {
        const movies = await searchMovie(query);
        setSearchideos(movies);
      }
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <Box>
      <Header onSubmit={getSeachValue} />
      {searchVideos.length > 0 ? (
        <Movies items={searchVideos} />
      ) : (
        <Movies items={trendMovies} />
      )}
      <Footer />
    </Box>
  );
};

export default Home;
