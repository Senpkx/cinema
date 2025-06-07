import { createContext, useContext, useState, type FC } from "react";
import type { MovieData } from "../interface/movieData";
import type { IChildrenProps } from "../interface/endpointsInterface";

interface IMovieContextType {
  moviesList: MovieData[];
  setMoviesList: (movies: MovieData[]) => void;

  isActive: string;
  setIsActive: (isActive: string) => void;

  movieData: MovieData | null;
  setMovieData: (movieData: MovieData) => void;
}
const MovieListContext = createContext<IMovieContextType | undefined>(
  undefined
);

export const MovieProvider: FC<IChildrenProps> = ({ children }) => {
  const [moviesList, setMoviesList] = useState<MovieData[]>([]);
  const [isActive, setIsActive] = useState<string>("");
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  return (
    <MovieListContext
      value={{
        moviesList,
        setMoviesList,
        isActive,
        setIsActive,
        movieData,
        setMovieData,
      }}
    >
      {children}
    </MovieListContext>
  );
};

export const useMovieList = () => {
  const context = useContext(MovieListContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};
