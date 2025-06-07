import { useEffect, type FC } from "react";
import { MovieList } from "../movieList/movieList";
import { getMoviesByGenre } from "../../service/axios";
import { useMovieList } from "../../hooks/MovieListContex";

export const Home: FC = () => {
  const { setMoviesList } = useMovieList();

  useEffect(() => {
    const getMovieInHome = async (): Promise<void> => {
      try {
        const response = await getMoviesByGenre("2025");
        setMoviesList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieInHome();
  }, []);

  return <MovieList />;
};
