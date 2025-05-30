import type { TranslationIframe } from "./translationIframe";

export interface MovieData {
  name: string;
  original_name: string;
  alternative_name: string | null;
  year: number;
  category: number;
  id_kp: number;
  alternative_id_kp: number | null;
  id_imdb: string;
  id_tmdb: number;
  id_world_art: number | null;
  token_movie: string;
  country: string;
  genre: string;
  actors: string;
  directors: string;
  producers: string;
  premiere_ru: string;
  premiere: string;
  age_restrictions: number;
  rating_mpaa: string;
  rating_kp: number;
  rating_imdb: number;
  time: string;
  tagline: string;
  poster: string;
  description: string;
  quality: string;
  translation: string;
  translation_iframe: TranslationIframe;
  iframe: string;
  iframe_trailer: string;
  lgbt: boolean;
  uhd: boolean;
  available_directors_cut: boolean;
}
