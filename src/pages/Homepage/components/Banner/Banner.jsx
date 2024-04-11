import React from "react";
import "./Banner.style.css";
import { useNowPlayingMoviesQuery } from "../../../../hooks/useNowPlyingMovies";
import Alert from "react-bootstrap/Alert";
import { PropagateLoader } from "react-spinners";
import BannerMovieSlider from "../../../../common/BannerMovieSlide/BannerMovieSlider";
import { bannerresponsive } from "../../../../constants/bannerresponsive";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();

  if (isLoading) {
    return (
      <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    // <Carousel>
    //   <Carousel.Item>
    //     <div className="gradient-overlay">
    //       <img
    //         className="d-block w-100"
    //         src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].backdrop_path}`}
    //         alt="First slide"
    //       />
    //     </div>
    //     <Carousel.Caption>
    //       <h1>{data?.results[0].title}</h1>
    //       <p className="overview">{data?.results[0].overview}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="gradient-overlay">
    //       <img
    //         className="d-block w-100"
    //         src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[1].backdrop_path}`}
    //         alt="Second slide"
    //       />
    //     </div>
    //     <Carousel.Caption>
    //       <h1>{data?.results[1].title}</h1>
    //       <p className="overview">{data?.results[1].overview}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="gradient-overlay">
    //       <img
    //         className="d-block w-100"
    //         src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[2].backdrop_path}`}
    //         alt="Third slide"
    //       />
    //     </div>
    //     <Carousel.Caption>
    //       <h1>{data?.results[2].title}</h1>
    //       <p className="overview">{data?.results[2].overview}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div className="banner">
      <BannerMovieSlider
        movies={data.results}
        responsive={bannerresponsive}
      />
    </div>
  );
};

export default Banner;
