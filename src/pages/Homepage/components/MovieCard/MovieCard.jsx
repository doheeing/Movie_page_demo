import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

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
    <div>
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
                  <FontAwesomeIcon icon={faThumbsUp} />
                  &nbsp;{Math.round(movie.vote_average * 10) / 10}&nbsp;/ 10
                </div>
                <div className="popular">
                  <FontAwesomeIcon icon={faFire} />
                  &nbsp;Popularity : {Math.round(movie.popularity * 10) / 10}K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
