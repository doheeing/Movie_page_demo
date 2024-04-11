import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchNowPlayingMovies = () => {
  return api.get(`/movie/popular?language=ko`);
};

export const useNowPlayingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-Nowplaying"],
    queryFn: fetchNowPlayingMovies,
    select: (result) => result.data,
  });
};
