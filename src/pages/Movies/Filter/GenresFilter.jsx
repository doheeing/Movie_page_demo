import React from "react";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import "./GenresFilter.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GenresFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();

  if (isLoading) return <div>장르를 불러오는중</div>;
  if (isError) return <div>장르가 없어요</div>;

  return (
    <div className="genre-filter-button-area">
      <Row>
        {genres?.map((genre) => (
          <Col lg={2} sm={6} className="genre-filter-button-area-col">
            <button
              onClick={(e) => onGenreChange(e.target.value)}
              key={genre.id}
              value={genre.id}
            >
              {genre.name}
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GenresFilter;
