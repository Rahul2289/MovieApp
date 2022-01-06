import React, { useEffect } from "react";
import "./home.css";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "./../../common/apis/MovieApiKey";
import MovieListing from "./../movielisting/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/MovieSlice";
const Home = () => {
  const movieText = "Harry";
  const dispach = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKEY}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("err", err);
      });
      dispach(addMovies(response.data));
    };
    fetchMovies();
  });
  return (
    <div>
      <div className="card">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
