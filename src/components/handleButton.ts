import type { IEndpoints } from "../interface/endpointsInterface";
import type { MovieData } from "../interface/movieData";
import { searchMovie } from "../service/axios";
import { extractFromInput } from "./extractFromInput";

type THandleButton = {
  setError: (error: string) => void;
  inputValue: IEndpoints;
};

export const handleButton = async ({
  setError,
  inputValue,
}: THandleButton): Promise<MovieData> => {
  const endPoints = extractFromInput(inputValue.name);
  try {
    const response = await searchMovie(endPoints);
    if (response.status === "error") {
      setError(response.status);
      return response.data;
    }
    setError("");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
