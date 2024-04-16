import React, { useEffect } from "react";
import "./MovieRecommandation.style.css";
import MovieRecommendCard from "./MovieRecommendCard";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../constants/responsive";
import { useMovieRecommendQuery } from "../../../hooks/useMovieDetail";
import { PropagateLoader } from "react-spinners";
import Alert from "react-bootstrap/Alert";

const MovieRecommandation = ({ recommend }) => {
  //   const { isLoading, isError, error } = useMovieRecommendQuery({ recommend });
  // console.log("recommend", recommend);
  //   if (isLoading) {
  //     return (
  //       <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
  //     );
  //   }
  //   if (isError) {
  //     return <Alert variant="danger">{error.message}</Alert>;
  //   }

  return (
    <div className="detail-recommend-wrap">
      {recommend && recommend.length > 0 ? (
        <div>
          <Carousel
            infinite={true}
            centerMode={true}
            itemClass="movie-slider-recommand p-1"
            containerClass="carousel-container-recommand"
            responsive={responsive}
          >
            {recommend?.map((item, index) => (
              <MovieRecommendCard item={item} key={index} />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="recommend-none">추천영화가 없습니다.</div>
      )}
    </div>
  );
};
export default MovieRecommandation;
