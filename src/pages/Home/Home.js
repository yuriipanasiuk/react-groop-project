import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import PaginationRounded from 'components/Pagination/Pagination';

import Box from 'components/Box';
import Movies from 'components/Movies';
import Header from 'components/HomeHeader';
import Footer from 'components/Footer';

import { Loader, Container, ToTopButton, Icon } from './Home.styled';

import { getTrendingMovie, searchMovie } from 'ApiService/ApiService';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [searchVideos, setSearchideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [query, seQuery] = useState('');
  const [visibe, setVisible] = useState(false);

  const scroll = Scroll.animateScroll;

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 1000) {
      setVisible(true);
    }
    if (position <= 1000) {
      setVisible(false);
    }
  };

  useEffect(() => {
    try {
      async function trendMovies() {
        const movies = await getTrendingMovie(currentPage);
        setTrendMovies(movies.results);
        setTotalPages(movies.total_pages);
      }
      trendMovies();

      scroll.scrollToTop();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, scroll]);

  useEffect(() => {
    try {
      async function getMovies() {
        if (query) {
          const movies = await searchMovie(query, currentPage);
          setSearchideos(movies.results);
          setTotalPages(movies.total_pages);
        }
      }
      getMovies();
      scroll.scrollToTop();
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, query, scroll]);

  const getSeachValue = data => {
    seQuery(data.text);
    setCurrentPage();
  };

  const getCurrentPage = page => {
    setCurrentPage(page);
  };

  const toTopButton = () => {
    scroll.scrollToTop();
  };
  // console.log(currentPage);

  return (
    <div>
      <Header onSubmit={getSeachValue} />

      <Container>
        {trendMovies.length === 0 && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Loader color="#FF6B01" />
          </Box>
        )}
        {searchVideos.length > 0 ? (
          <Movies items={searchVideos} />
        ) : (
          <Movies items={trendMovies} />
        )}

        <Box display="flex" justifyContent="center" mt={6}>
          <PaginationRounded
            currentPage={getCurrentPage}
            totalPages={totalPages}
            pages={currentPage}
          />
        </Box>
        {visibe && (
          <ToTopButton type="button" onClick={toTopButton}>
            <Icon size={50} />
          </ToTopButton>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
