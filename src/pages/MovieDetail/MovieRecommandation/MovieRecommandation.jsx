import React from "react";
import "./MovieRecommandation.style.css";
import MovieRecommendCard from "./MovieRecommendCard";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../constants/responsive";

const MovieRecommandation = ({ recommend }) => {
  console.log("recommend", recommend);
  return (
    <div className="detail-recommend-wrap">
      {recommend?.length === 0 ? (
        <div className="recommend-none">추천영화가 없습니다.</div>
      ) : (
        <div>
        <h3>비슷한 영화</h3>
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="movie-slider-recommand p-1"
          containerClass="carousel-container-recommand"
          responsive={responsive}
        >
          {recommend?.map((item, index) => (
            <MovieRecommendCard item={item} />
          ))}
        </Carousel>
        </div>
      )}
    </div>
  );
};
export default MovieRecommandation;
