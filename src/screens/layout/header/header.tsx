import type { FC } from "react";
import { getMoviesList } from "../../../service/axios";
import style from "./header.module.scss";
import { Search } from "./search/search";
import { useMovieList } from "../../../hooks/MovieListContex";
import { Popcorn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const { isActive, setIsActive, setMoviesList } = useMovieList();
  const navigate = useNavigate();

  const listData = [
    { path: "movie", name: "Фильмы" },
    { path: "serial", name: "Сериалы" },
    { path: "tv-show", name: "TV show" },
  ];

  const handleClick = async (list: string): Promise<void> => {
    try {
      const response = await getMoviesList(list);
      setMoviesList(response.data);
      setIsActive(list);
      navigate("list");

      return;
    } catch (error) {}
  };
  return (
    <div className={style.container}>
      <Link
        to="/"
        onClick={() => {
          setIsActive("");
          setMoviesList([]);
        }}
      >
        <Popcorn className={style.logo} />
      </Link>
      <header className={style.header}>
        <nav>
          <ul className={style.list}>
            {listData.map((item) => (
              <li
                key={item.path}
                onClick={() => {
                  handleClick(item.path);
                }}
                className={
                  isActive === item.path
                    ? `${style.link} ${style.active}`
                    : style.link
                }
              >
                <Link to={"list"}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Search />
      </header>
    </div>
  );
};
