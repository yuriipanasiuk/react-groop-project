import MovieCard from 'components/MovieCard';
import { Container, List, Item } from './Movies.styled';

const Movies = ({ items }) => {
  return (
    <Container>
      <List>
        {items.map(({ id, poster_path, title, release_date, genre_ids }) => (
          <Item key={id}>
            <MovieCard
              img={poster_path}
              title={title}
              release={release_date}
              genre={genre_ids}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Movies;
