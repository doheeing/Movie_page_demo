import React from 'react'
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { PropagateLoader } from "react-spinners";
import { useUpcomingMoviesQuery } from './../../../../hooks/useUpcomingMovies';
const UpComingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
    if (isLoading) {
      return (
        <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
      );
    }
    if (isError) {
      return <Alert variant="danger">{error.message}</Alert>;
    }
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}

export default UpComingMovieSlide
