import Box from 'components/Box';
import MovieCard from 'components/MovieCard';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const Movies = ({ items }) => {
  return (
    <Box>
      <ul>
        {items.map(({ id, poster_path, title, release_date, genre_ids }) => (
          <li key={id}>
            <MovieCard
              img={poster_path}
              title={title}
              release={release_date}
              genre={genre_ids}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Movies;
