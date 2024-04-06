import React, { useEffect } from "react";
import "./NotFoundPage.css";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 10000);
  }, []);
  return (
    <div className="not-found-page">
      <div className="error-message">
        <h3>Oops!</h3>
        <h1>404</h1>
        <h4>Your page is currently maintenance </h4>
        <h4>and will guide you back to the homepage </h4>
        <h4>after 10 seconds.</h4>
        <Link to="/" className="error-page-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
