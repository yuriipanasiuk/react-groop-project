import movieGenres from '../../utils/genresItems.json';
import Box from 'components/Box';
import {
  Image,
  Span,
  FilmTitle,
  GenreType,
  ProdYear,
  Item,
  ModalImage,
  ModalFilmTitle,
  VoteTitle,
  List,
  AboutText,
  AboutTitle,
  VoteAvarageText,
  VoteCountText,
  ModalItem,
} from 'components/MovieCard/MovieCard.styled';
import Modal from 'components/Modal';

import { getMoviedetails } from 'ApiService/ApiService';
import { useState } from 'react';

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
        src={`${baseImageUrl}${img}`}
        alt={title}
        onClick={handleImageClick}
      />
      <FilmTitle>{title}</FilmTitle>
      <Box display="flex" alignItems="center">
        <GenreType>{genreType || 'Action'}</GenreType>
        <Span>|</Span>
        <ProdYear>{release.slice(0, 4) || '2025'}</ProdYear>
      </Box>
      {aboutMovie && (
        <Modal onClick={closeModal}>
          <Box display="flex">
            <ModalImage
              src={`${baseImageUrl}${img}`}
              alt={title}
              onClick={handleImageClick}
            />

            <div>
              <ModalFilmTitle>{original_title}</ModalFilmTitle>
              <List>
                <ModalItem>
                  <VoteTitle>Vote / Votes</VoteTitle>
                  <VoteAvarageText>{vote_average} </VoteAvarageText>
                  <span>/</span>
                  <VoteCountText>{vote_count}</VoteCountText>
                </ModalItem>
                <ModalItem>
                  <VoteTitle>Popularity </VoteTitle>
                  <VoteCountText>{popularity}</VoteCountText>
                </ModalItem>
                <ModalItem>
                  <VoteTitle>Original Title </VoteTitle>
                  <VoteCountText>{original_title}</VoteCountText>
                </ModalItem>
                <ModalItem>
                  <VoteTitle>Genre</VoteTitle>
                  {genres && (
                    <VoteCountText>
                      {genres.map(({ name }) => name)}
                    </VoteCountText>
                  )}
                </ModalItem>
                <Box mt={20}>
                  <AboutTitle>About</AboutTitle>
                  <AboutText>{overview}</AboutText>
                </Box>
              </List>
            </div>
          </Box>
        </Modal>
      )}
    </Item>
  );
};

export default MovieCard;
