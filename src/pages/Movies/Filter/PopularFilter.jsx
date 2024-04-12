import React from "react";
import { Form } from "react-bootstrap";
import "./PopularFilter.style.css";

const PopularFilter = ({ onSortChange }) => {
  return (
    <div className="popular-filter-sort">
      <Form.Select
        aria-label="Popular"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option>Sort</option>
        <option value="desc">오름차순</option>
        <option value="asc">내림차순</option>
      </Form.Select>      
    </div>
  );
};

export default PopularFilter;
