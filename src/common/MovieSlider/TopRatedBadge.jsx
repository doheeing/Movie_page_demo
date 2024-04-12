import React from "react";
import "./TopRatedBadge.jsx";

const TopRatedBadge = ({index}) => {
    console.log("index", index)
  return (
    <div className="top_rated_badge">
      <span>{index+1}</span>
    </div>
  );
};

export default TopRatedBadge;
