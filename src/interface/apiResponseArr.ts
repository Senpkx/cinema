import type { MovieData } from "./movieData";

export interface ApiResponseArr {
  data: MovieData[];
  next_page?: number;
  prev_page?: number | null;
}
