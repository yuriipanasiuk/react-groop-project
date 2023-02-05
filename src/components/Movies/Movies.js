import MovieCard from 'components/MovieCard';
import { List } from './Movies.styled';

const Movies = ({ items }) => {
  return (
    <>
      <List>
        {items.map(({ id, poster_path, title, release_date, genre_ids }) => (
          <MovieCard
            key={id}
            img={poster_path}
            title={title}
            release={release_date}
            genre={genre_ids}
            id={id}
          />
        ))}
      </List>
    </>
  );
};

export default Movies;
