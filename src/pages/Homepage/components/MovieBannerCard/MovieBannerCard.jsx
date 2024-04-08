import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MovieBannerCard.style.css";

const MovieBannerCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie?.poster_path}` +
          ")",
      }}
      className="banner-movie-card"
    >
      <div className="banner-overlay">
        <h1>{movie?.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieBannerCard;
