// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";
// import { useMovieReviewQuery } from "./../../../hooks/useMovieDetail";
// import MovieReviewCard from "./MovieReviewCard";
// import Accordion from "react-bootstrap/Accordion";
// import "./MovieReviews.style.css";

// const MovieReviews = ({ review, index }) => {
//   console.log("review", review)
//   return (
//     <div className="detail-review-wrap">
//       {review?.length === 0 ? (
//         <div className="review-none">리뷰가 없습니다.</div>
//       ) : (
//         <Accordion>
//           <MovieReviewCard review={review} index={index} />
//         </Accordion>
//       )}
//     </div>
//   );
// };
// export default MovieReviews;
