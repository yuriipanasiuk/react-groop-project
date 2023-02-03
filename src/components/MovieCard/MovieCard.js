import { useEffect, useState } from 'react';

import movieGenres from '../../utils/genresItems.json';
import Box from 'components/Box';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

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
    <div>
      <img src={`${baseImageUrl}${img}`} alt={title} />
      <h2>{title}</h2>
      <Box display="flex">
        <p>{genreType || 'Action'}</p>
        <span>|</span>
        <p>{release.slice(0, 4) || '2025'}</p>
      </Box>
    </div>
  );
};

export default MovieCard;
