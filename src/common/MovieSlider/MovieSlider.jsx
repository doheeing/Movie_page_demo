import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../../pages/Homepage/components/MovieCard/MovieCard";
import "react-multi-carousel/lib/styles.css";


const MovieSlider = ({ title, movies, responsive }) => {
  
  return (
    <div className="movie-slider-area">
      <h3 className="movie-slider-text">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        autoPlay
        autoPlaySpeed={30000}
      >
        {movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
