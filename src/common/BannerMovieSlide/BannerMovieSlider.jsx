import React from "react";
import Carousel from "react-multi-carousel";
import MovieBannerCard from "../../pages/Homepage/components/MovieBannerCard/MovieBannerCard";
import "./BannerMovieSlider.css";
const BannerMovieSlider = ({ movies, responsive }) => {
  return (
    <div className="banner-slide-area">
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        responsive={responsive}
        className="banner-slide-area-carosel"
      >
        {movies?.map((movie, index) => (
          <MovieBannerCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default BannerMovieSlider;
