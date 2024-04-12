import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../Homepage/components/MovieCard/MovieCard";
import { PropagateLoader } from "react-spinners";
import Alert from "react-bootstrap/Alert";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import PopularFilter from "./Filter/PopularFilter";
import GenresFilter from "./Filter/GenresFilter";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const pageTitle = keyword ? "Search" : "Movie";
  const [sortOrder, setSortOrder] = useState("");
  const [genresFilter, setGenresFilter] = useState("");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const handleSortChange = (order) => {
    setSortOrder(order);
  };
  const handleGenreChange = (genreId) => {
    setGenresFilter(genreId);
  };

  let filteredMovies = data?.results || [];
  if (genresFilter) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.genre_ids.includes(parseInt(genresFilter))
    );
  }

  if (sortOrder) {
    filteredMovies.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.vote_average - b.vote_average;
      } else {
        return b.vote_average - a.vote_average;
      }
    });
  }

  useEffect(() => {
    setPage(1);
  }, [genresFilter]);

  useEffect(() => {
    setGenresFilter("");
  }, [keyword]);

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
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <div className="movie-page-wrap">
              <div className="filter-wrap">
                <div className="filter-box">
                  <PopularFilter onSortChange={handleSortChange} />
                  <GenresFilter onGenreChange={handleGenreChange} />
                </div>
                <div className="filter-total">전체 : {data.total_results}</div>
              </div>
            </div>
          </Col>
          <Col lg={8} xs={12}>
            <Row>
              {filteredMovies.map((movie, index) => (
                <Col key={index} lg={4} xs={12} className="movie-page-card">
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
            <ReactPaginate
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={data?.total_pages} //전체페이지
              forcePage={page - 1}
              previousLabel="<"
              nextLabel=">"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviePage;
