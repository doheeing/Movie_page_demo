import React from "react";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import "./MovieRecommendCard.style.css";
const MovieRecommendCard = ({ item }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const getMovieDetails = () => {
    navigate(`/movies/${item?.id}`);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${item?.backdrop_path}` +
            ")",
        }}
        className="movie-card-recommand"
        onClick={getMovieDetails}
      >
        <div className="overlay">
          <div className="movie-text">
            <h1>{item.title}</h1>
          </div>
        </div>
        <div>{item.title}</div>
      </div>
    </div>
  );
};

export default MovieRecommendCard;
