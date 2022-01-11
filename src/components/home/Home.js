import React, { useEffect } from "react";
import "./home.css";

import MovieListing from "./../movielisting/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/MovieSlice";

const Home = () => {
  const initialMovie = "Spider";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(initialMovie));
    dispatch(fetchAsyncShows(initialMovie));
  }, [dispatch]);
  return (
    <div>
      <div className="card">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
