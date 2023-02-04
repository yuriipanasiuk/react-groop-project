import movieGenres from '../../utils/genresItems.json';
import Box from 'components/Box';
import {
  Image,
  Span,
  FilmTitle,
  GenreType,
  ProdYear,
} from 'components/MovieCard/MovieCard.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w400';

const getGenres = (genre, genresId) => {
  let movieGenre = genre
    .filter(({ id }) => genresId.includes(id))
    .map(({ name }) => name)
    .join(' ');

  return movieGenre;
};

const MovieCard = ({ img, title, release, genre }) => {
  const genreType = getGenres(movieGenres, genre);

  return (
    <>
      <Image src={`${baseImageUrl}${img}`} alt={title} />
      <FilmTitle>{title}</FilmTitle>
      <Box display="flex" alignItems="center">
        <GenreType>{genreType || 'Action'}</GenreType>
        <Span>|</Span>
        <ProdYear>{release.slice(0, 4) || '2025'}</ProdYear>
      </Box>
    </>
  );
};

export default MovieCard;
