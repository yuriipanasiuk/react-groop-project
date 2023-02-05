import { useState } from 'react';

import movieGenres from '../../utils/genresItems.json';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Button from 'components/Button';
import {
  Image,
  Span,
  FilmTitle,
  GenreType,
  ProdYear,
  Item,
  ModalImage,
  ModalFilmTitle,
  Title,
  List,
  AboutText,
  AboutTitle,
  AvarageText,
  Text,
  ModalItem,
} from 'components/MovieCard/MovieCard.styled';

import { getMoviedetails } from 'ApiService/ApiService';

const baseImageUrl = 'https://image.tmdb.org/t/p/w400';

const getGenres = (genre, genresId) => {
  let movieGenre = genre
    .filter(({ id }) => genresId.includes(id))
    .map(({ name }) => name)
    .join(' ');

  return movieGenre;
};

const MovieCard = ({ img, title, release, genre, id }) => {
  const [aboutMovie, setAboutMovie] = useState('');
  const genreType = getGenres(movieGenres, genre);

  const handleImageClick = async e => {
    const movieDetails = await getMoviedetails(id);
    setAboutMovie(movieDetails);
  };

  const closeModal = () => {
    setAboutMovie('');
  };

  const {
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = aboutMovie;

  return (
    <Item>
      <Image
        src={
          img
            ? `${baseImageUrl}${img}`
            : `https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found`
        }
        alt={title}
        onClick={handleImageClick}
      />
      <FilmTitle>{title}</FilmTitle>

      <Box display="flex" alignItems="center">
        <GenreType>{genreType || 'Action'}</GenreType>
        <Span>|</Span>
        <ProdYear>{release ? release.slice(0, 4) : '2025'}</ProdYear>
      </Box>

      {aboutMovie && (
        <Modal onClick={closeModal}>
          <Box display="flex">
            <ModalImage
              src={
                img
                  ? `${baseImageUrl}${img}`
                  : `https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found`
              }
              alt={title}
              onClick={handleImageClick}
            />

            <div>
              <ModalFilmTitle>{original_title}</ModalFilmTitle>
              <List>
                <ModalItem>
                  <Title>Vote / Votes</Title>
                  <AvarageText>{vote_average} </AvarageText>
                  <span>/</span>
                  <Text>{vote_count}</Text>
                </ModalItem>
                <ModalItem>
                  <Title>Popularity </Title>
                  <Text>{popularity}</Text>
                </ModalItem>
                <ModalItem>
                  <Title>Original Title </Title>
                  <Text>{original_title}</Text>
                </ModalItem>
                <ModalItem>
                  <Title>Genre</Title>
                  {genres && <Text>{genres.map(({ name }) => name)}</Text>}
                </ModalItem>
              </List>
              <Box mt={20} mb={20}>
                <AboutTitle>About</AboutTitle>
                <AboutText>{overview}</AboutText>
              </Box>
              <Box display="flex" justifyContent="center">
                <Button color="#000">add to Watched</Button>
                <Button color="#000">add to queue</Button>
              </Box>
            </div>
          </Box>
        </Modal>
      )}
    </Item>
  );
};

export default MovieCard;
