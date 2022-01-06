import React from "react";
import "./MovieCard.css";
const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} className="img" />
        </div>
        <div className="card-bottom">
          <div className="info">
            <h4 className="title">{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
