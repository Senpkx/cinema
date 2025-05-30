import type { IEndpoints } from "../interface/endpointsInterface";
import type { MovieData } from "../interface/movieData";
import { getApi } from "../service/axios";
import { extractFromInput } from "./extractFromInput";

type THandleButton = {
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | unknown) => void;
  inputValue: IEndpoints;
};

export const handleButton = async ({
  setIsLoading,
  setError,
  inputValue,
}: THandleButton): Promise<MovieData> => {
  setIsLoading(true);
  const endPoints = extractFromInput(inputValue.name);
  try {
    const response = await getApi(endPoints);
    if (response.status === "error") {
      setError(response.status);
      return response.data;
    }
    setError(null);
    return response.data;
  } catch (error) {
    setError(error);
    throw error;
  } finally {
    setIsLoading(false);
  }
};
