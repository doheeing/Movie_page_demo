import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (error) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <h3>Popular Movie</h3>
      {/* {data && (
      <Carousel
        infinite={true} // 무한반복
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      ></Carousel>
      )} */}
    </div>
  );
};

export default PopularMovieSlide;
