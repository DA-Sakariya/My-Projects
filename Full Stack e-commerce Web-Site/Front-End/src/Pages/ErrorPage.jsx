import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";  

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  );
};
