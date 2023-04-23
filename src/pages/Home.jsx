import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/GetCards';
import { MovieList } from '../components/CardsList/CardsList';
import { Loader } from 'components/Loader/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPopularMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <>
      <h1>Trending Today:</h1>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </>
  );
}

export default Home;
