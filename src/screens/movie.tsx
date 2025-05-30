import { useRef, useState, type FC } from "react";
import { handleButton } from "../components/handleButton";
import type { IEndpoints } from "../interface/endpointsInterface";
import type { MovieData } from "../interface/movieData";
import styles from "./movie.module.scss";

export const Movie: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<IEndpoints>({ name: "" });
  const [error, setError] = useState<string | unknown>(null);
  const [inputEmpty, setInputEmpty] = useState<boolean>(false);
  const [data, setData] = useState<MovieData | null>(null);
  const refInputValue = useRef<HTMLInputElement>(null);

  const handleClick = async (): Promise<void> => {
    try {
      if (!inputEmpty && inputValue.name) {
        const response = await handleButton({
          setIsLoading,
          setError,
          inputValue,
        });
        setData(response);
      }
    } catch {
      console.log(error, "error get data");
    }
  };
  const handleInput = (): void => {
    const value = refInputValue.current?.value ?? "";
    if (!value) {
      setInputEmpty(true);
      setInputValue({ name: value });
      return;
    }
    setInputValue({ name: value });
    setInputEmpty(false);
  };
  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.input_button}>
        <input
          className={styles.input}
          type="text"
          onChange={handleInput}
          onKeyDown={handleKeyboard}
          ref={refInputValue}
          disabled={isLoading}
          placeholder="Название фильма и год"
        />
        <button
          className={styles.button}
          onClick={handleClick}
          disabled={!inputValue.name || isLoading}
        >
          Найти
        </button>
      </div>

      <div className={styles.allelem}>
        {data?.poster && (
          <img className={styles.poster} src={data?.poster} alt="" />
        )}

        <div className={styles.errors}>
          {error
            ? "Нет такого  или неправильное название"
            : inputEmpty
            ? "Введите название фильма"
            : ""}
        </div>
        {data?.iframe ? (
          <iframe
            src={data.iframe}
            title="Трейлер фильма"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups"
          />
        ) : null}
      </div>
    </div>
  );
};
