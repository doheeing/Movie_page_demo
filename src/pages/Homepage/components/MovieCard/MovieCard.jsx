import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie, index }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const getMovieDetails = () => {
    navigate(`/movies/${movie?.id}`);
  };

  return (
    <div className="movie-card-body">
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}` +
            ")",
        }}
        className="movie-card"
        onClick={getMovieDetails}
      >
        <div className="overlay">
          <div
            style={{
              backgroundImage:
                "url(" +
                `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}` +
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
              <div className="vote">
                <div className="vote-rate">
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;평점 : {Math.round(movie.vote_average * 10) / 10}&nbsp;
                </div>
                <div className="popular">
                  <FontAwesomeIcon icon={faFire} />
                  &nbsp;누적관객수 : {Math.round(movie.popularity)}만명
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-card-under-title">{movie.title} </div>
    </div>
  );
};

export default MovieCard;
