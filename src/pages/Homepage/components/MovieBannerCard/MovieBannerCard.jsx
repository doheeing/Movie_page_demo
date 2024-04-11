import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MovieBannerCard.style.css";
import { useNavigate } from "react-router-dom";

const MovieBannerCard = ({ movie }) => {
  const navigate = useNavigate();
  const getMovieDetails = () => {
    navigate(`/movies/${movie?.id}`);
  };
  return (
    <div className="banner-movie-card">
      <img
        className="d-block w-100"
        src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie?.poster_path}`}
        onClick={getMovieDetails}
      />
    </div>
  );
};

export default MovieBannerCard;
