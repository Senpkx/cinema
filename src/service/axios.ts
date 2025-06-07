import axios from "axios";
import type { ApiResponse } from "../interface/apiResponse";
import type { IEndpoints } from "../interface/endpointsInterface";
import type { ApiResponseArr } from "../interface/apiResponseArr";

export const AxiosBase = axios.create({
  baseURL: "https://api.alloha.tv",
  timeout: 10000,
  params: { token: "04941a9a3ca3ac16e2b4327347bbc1" },
});

export const searchMovie = async (
  Endpoints: IEndpoints | undefined
): Promise<ApiResponse> => {
  try {
    const response = await AxiosBase.get("/", { params: Endpoints });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByGenre = async (
  genre: string
): Promise<ApiResponseArr> => {
  try {
    const response = await AxiosBase.get("/", {
      params: {
        list: true,
        genre: genre,
        rating_kp: 7,
      },
      paramsSerializer: (params) => {
        const queryParts = [];
        for (const [key, value] of Object.entries(params)) {
          if (key === "list") {
            queryParts.push("list");
          }
          if (value === "uhd/4k") {
            queryParts.push("uhd=true");
          }
          if (value === "2025") {
            queryParts.push("year=2025");
          } else {
            queryParts.push(`${key}=${encodeURIComponent(value)}`);
          }
        }
        return queryParts.join("&");
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesList = async (list: string): Promise<ApiResponseArr> => {
  try {
    const response = await AxiosBase.get("/", {
      params: { list: list },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieByToken = async (token: string): Promise<ApiResponse> => {
  try {
    const response = await AxiosBase.get("/", {
      params: { token_movie: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
