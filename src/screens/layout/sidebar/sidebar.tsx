import type { FC } from "react";
import style from "./sidebar.module.scss";
import { getMoviesByGenre } from "../../../service/axios";
import { useMovieList } from "../../../hooks/MovieListContex";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar: FC = () => {
  const { setIsActive, isActive, setMoviesList } = useMovieList();
  const navigate = useNavigate();

  const genres = [
    "аниме",
    "биография",
    "боевик",
    "вестерн",
    "военный",
    "детектив",
    "детский",
    "документальный",
    "драма",
    "игра",
    "история",
    "комедия",
    "концерт",
    "короткометражка",
    "криминал",
    "мелодрама",
    "музыка",
    "мультфильм",
    "мюзикл",
    "новости",
    "приключения",
    "реальное ТВ",
    "семейный",
    "спорт",
    "ток-шоу",
    "триллер",
    "ужасы",
    "фантастика",
    "фильм-нуар",
    "фэнтези",
    "церемония",
    "uhd/4k",
    "2025",
  ];

  const handleClick = async (selectGenre: string): Promise<void> => {
    try {
      const response = await getMoviesByGenre(selectGenre);
      setMoviesList(response.data);
      setIsActive(selectGenre);
      navigate("list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <aside className={style.aside}>
      <nav>
        <ul className={style.genre_list}>
          {genres.map((genre, inx) => (
            <li
              key={inx}
              className={
                isActive === genre
                  ? `${style.genre} ${style.active}`
                  : style.genre
              }
              onClick={(e) => {
                e.preventDefault();
                handleClick(genre);
              }}
            >
              <Link to="list">{genre}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
