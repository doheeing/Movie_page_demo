import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  useMovieDetailCastsQuery,
  useMovieDetailQuery,
  useMovieDetailReviewsQuery,
} from "../../hooks/useMovieDetail";
import Badge from "react-bootstrap/Badge";
import { PropagateLoader } from "react-spinners";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieReviews from "./MovieReviews/MovieReviews";

const MovieDetailPage = () => {

  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  const { data: genreData } = useMovieGenreQuery();
  const { data: CreditsData } = useMovieDetailCastsQuery(id);
  console.log("data", data);

  if (isLoading) {
    return (
      <PropagateLoader color="#ee8282" cssOverride={{}} loading size={10} />
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
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
          <Row>
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
                <div>★ {data?.vote_average.toFixed(1)}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <MovieReviews />
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default MovieDetailPage;
