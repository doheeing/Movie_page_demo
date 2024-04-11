// import { useQuery } from "@tanstack/react-query";
// import api from "../utils/api";

// const fetchMovieDetail = ({id}) => {
//   return api.get(`/movie/${id}`);
// };

// export const useMovieDetailQuery = ({id}) => {
//   return useQuery({
//     queryKey: ["movie-details", { id }],
//     queryFn: fetchMovieDetail,
//     select: (result) => result.data,
//   });
// };


import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = async (movieId) => {
  const response = await api.get(`/movie/${movieId}?language=ko`);
  return response.data;
};

export const useMovieDetailQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: () => fetchMovieDetail(movieId),
    enabled: !!movieId,
  });
};
const fetchMovieDetailReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews?language=ko`);
  return response.data;
};
export const useMovieDetailReviewsQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail-reviews", movieId],
    queryFn: () => fetchMovieDetailReviews(movieId),
    enabled: !!movieId,
    select: (result) => result.data,
  });
};

const fetchMovieDetailCasts = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits?language=ko`);
  return response.data;
};
export const useMovieDetailCastsQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail-casts", movieId],
    queryFn: () => fetchMovieDetailCasts(movieId),
    enabled: !!movieId,
  });
};