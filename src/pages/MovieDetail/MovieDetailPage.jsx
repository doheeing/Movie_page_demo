import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  useMovieDetailCastsQuery,
  useMovieDetailQuery,
  useMovieRecommendQuery,
  // useMovieReviewQuery,
  useVideoMoviesQuery,
} from "../../hooks/useMovieDetail";
import Badge from "react-bootstrap/Badge";
import { PropagateLoader } from "react-spinners";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import YouTube from "react-youtube";
import MovieRecommandation from "./MovieRecommandation/MovieRecommandation";
// import MovieReviews from "./MovieReviews/MovieReviews";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useMovieDetailQuery(id);
  const { data: genreData } = useMovieGenreQuery();
  const { data: CreditsData } = useMovieDetailCastsQuery(id);
  const { data: recommend } = useMovieRecommendQuery({ id });
  const { data: videoKey } = useVideoMoviesQuery(id);

  // const { data: review } = useMovieReviewQuery({ id });

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (isLoading) {
    return (
      <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  console.log("data".data);
  return (
    <div className="main-body">
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.poster_path}` +
            ")",
        }}
        className="detail-movie-poster"
      >
        <div className="blur-area">
          <Container className="container">
            <Row className="movie-detail-page-first-row">
              <Col lg={6} sm={12} className="detail-img-area">
                <img
                  src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${data?.backdrop_path}`}
                  className="detail-img"
                />
              </Col>
              <Col lg={6} sm={12} className="second-col">
                <div className="detail-title">{data?.title}</div>
                <div className="badge-area">
                  <div className="detail-genre">
                    {data?.genres.map((item, index) => (
                      <Badge className="badge" bg="outline-light" key={index}>
                        {item?.name}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="run-time badge" bg="outline-light">
                    {data?.runtime}분
                  </Badge>
                </div>
                <div className="people-list">
                  <span>출연 : </span>
                  {CreditsData?.cast?.slice(0, 5).map((cast) => (
                    <span key={cast.id}>
                      <span
                        src={`https://www.themoviedb.org/t/p/w200${cast.profile_path}`}
                        alt={cast.name}
                      />
                      <span>{cast.name} </span>
                    </span>
                  ))}
                </div>
                <div className="detail-overview">{data?.overview}</div>
                <div className="detail-base-line">
                  <div>개봉일 : {data?.release_date}</div>
                  <div className="detail-vote-average-line">
                    <FontAwesomeIcon icon={faStar} />{" "}
                    {data?.vote_average.toFixed(1)}
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="movie-detail-recommend">
              <div className="movie-detail-recommend-title">
                {data?.title}을 보신 분에게 추천하는 영화 !
              </div>
              <MovieRecommandation
                recommend={recommend}
                className="movie-recommend-area"
              />
            </Row>

            <Row className="movie-detail-video">
              <div className="movie-detail-recommend-title">
                {data?.title}을 미리 볼까요 ?
              </div>
              {videoKey?.length > 0 && (
                <YouTube
                  videoId={videoKey[0].key}
                  className="movie-video-area"
                />
              )}
            </Row>
            {/* <Row className="movie-detail-review">
              <MovieReviews review={review} className="movie-review-area" />
            </Row> */}
          </Container>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailPage;
