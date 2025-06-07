import type { FC } from "react";
import { useMovieList } from "../../hooks/MovieListContex";
import style from "./movieList.module.scss";
import { getMovieByToken } from "../../service/axios";
import { useNavigate } from "react-router-dom";

export const MovieList: FC = () => {
  const { moviesList, setMovieData } = useMovieList();
  const navigate = useNavigate();

  const handleClick = async (movie_id: string): Promise<void> => {
    try {
      const response = await getMovieByToken(movie_id);
      setMovieData(response.data);
      navigate("/movie");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      {moviesList ? (
        moviesList.map((item, inx) => (
          <div
            className={style.content}
            key={inx}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.token_movie);
            }}
          >
            {item.poster ? (
              <img className={style.poster} src={item.poster} alt="" />
            ) : (
              <img className={style.notfound} src="./not found.png" alt="" />
            )}
            <div className={style.info}>
              <div className={style.name}>{item.name}</div>
              <div className={style.genre}>{item.genre}</div>
              <div className={style.secound_info}>
                <div>{item.year}</div>
                <div>
                  {item.age_restrictions ? "+" + item.age_restrictions : ""}
                </div>
                <div>IMDb:{item.rating_imdb}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Not found movies</div>
      )}
    </div>
  );
};
