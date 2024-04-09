import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MovieBannerCard.style.css";

const MovieBannerCard = ({ movie }) => {
  return (
    <div className="banner-movie-card">
      <img
        className="d-block w-100"
        src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie?.poster_path}`}
      />
      <div className="banner-overlay">
        <h1>{movie?.title}</h1>
      </div>
    </div>
  );
};

export default MovieBannerCard;
