import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { useMovieDetailReviewsQuery } from "../../../hooks/useMovieDetail";

const MovieReviews = () => {
  let params = useParams();
  const { data } = useMovieDetailReviewsQuery(params);
  const [visibleReviews, setVisibleReviews] = useState(3); 

  const handleShowMoreReviews = () => { 
    setVisibleReviews(visibleReviews + 3);
  };

  return (
    <Container>
      <h4 style={{ color: "white" }}>리뷰</h4>
      {data && data.results && data.results.length > 0 ? (
        data.results.slice(0, visibleReviews).map((review, index) => (
          <Card
            key={index}
            className="my-3"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                {review?.author}
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                {review?.content}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div
          className="NotFound"
          style={{ color: "white", paddingTop: "50px" }}
        >
          리뷰가 존재하지 않습니다.
        </div>
      )}
      {/* 더보기 버튼 */}
      {visibleReviews < (data?.results?.length || 0) && (
        <div className="text-center mt-4">
          <Button variant="danger" onClick={handleShowMoreReviews}>
            더 많은 리뷰
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MovieReviews;
