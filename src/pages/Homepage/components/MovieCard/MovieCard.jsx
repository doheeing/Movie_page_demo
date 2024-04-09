import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <div
          style={{
            backgroundImage:
              "url(" +
              `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
              ")",
          }}
          className="movie-poster"
        >
          <div>
            {movie.adult ? (
              <Badge bg="danger">19</Badge>
            ) : (
              <Badge bg="primary">All</Badge>
            )}
          </div>
        </div>
        <div className="movie-text">
          <h1>{movie.title}</h1>
          <div className="card-genre">
            {showGenre(movie.genre_ids).map((id) => (
              <Badge bg="danger">{id}</Badge>
            ))}
          </div>
          <div>average : {movie.vote_average}</div>
          <div>popularity : {movie.popularity}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
