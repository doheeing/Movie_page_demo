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

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
};

const fetchMovieReview = ({ id }) => {
  return api.get(`/movie/${id}/reviews`);
};

export const useMovieReviewQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-review", id],
    queryFn: () => fetchMovieReview({ id }),
    select: (result) => result.data.results,
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
const fetchMovieRecommend = ({ id }) => {
  return api.get(`/movie/${id}/recommendations?language=ko`);
  
};

export const useMovieRecommendQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-recommend', id],
    queryFn: () => fetchMovieRecommend({ id }),
    select: (result) => result.data.results,
  })};

  const fetchVideoMovie = (id)=>{
    return api.get(`/movie/${id}/videos`)
}

export const useVideoMoviesQuery=(id)=>{
    return useQuery({
        queryKey:['movie-video',id],
        queryFn:()=>fetchVideoMovie(id),
        select:(result)=>result.data.results,
    })
  }