import Box from 'components/Box';
import Movies from 'components/Movies';
import { useEffect, useState } from 'react';

import { getTrendingMovie } from 'ApiService/ApiService';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

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

  return (
    <Box>
      <Movies items={trendMovies} />
    </Box>
  );
};

export default Home;
