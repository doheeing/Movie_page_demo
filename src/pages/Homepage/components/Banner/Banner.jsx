import React from "react";
import "./Banner.style.css";
import { useNowPlayingMoviesQuery } from "../../../../hooks/useNowPlyingMovies";
import Alert from "react-bootstrap/Alert";
import { PropagateLoader } from "react-spinners";
import BannerMovieSlider from "../../../../common/BannerMovieSlide/BannerMovieSlider";
import { bannerresponsive } from "../../../../constants/bannerresponsive";
const Banner = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();
  console.log("DDD", data);

  if (isLoading) {
    return (
      <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="banner">
      <BannerMovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={bannerresponsive}
        infinite
        autoPlay
        autoPlaySpeed={10}
      />
    </div>
  );
};

export default Banner;
