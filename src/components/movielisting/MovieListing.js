import React from "react";
import "./movielisting.css";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/MovieSlice";
import MovieCard from "./../moviecard/MovieCard";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="Error">Error</div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 style={{ textAlign: "center" }}>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
