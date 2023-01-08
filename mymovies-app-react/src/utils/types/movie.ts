type GenreType = {
  id?: number;
  name?: string;
};

export interface VidiosType {
  id: number;
  title: string;
  poster_path: string;
}

export interface MoviesType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  relase_date?: string;
  runtime?: number;
  vote_average?: number;
  genres?: GenreType[];
  backdrop_path?: string;
}
