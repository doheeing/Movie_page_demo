import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming?language=ko`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-Upcoming"],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data,
  });
};