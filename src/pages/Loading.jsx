import React from "react";
import "./css/loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span></span>
      </div>

      <h2 className="loading-text">
        Loading<span>.</span><span>.</span><span>.</span>
      </h2>
    </div>
  );
};

export default Loading;