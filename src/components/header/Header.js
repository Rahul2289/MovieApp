import React, { useState } from "react";
import "./header.css";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/MovieSlice.js";
function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandles = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="NavContainer">
      <div className="left">MovieApp</div>
      <div className="right">
        <form onSubmit={submitHandles}>
          <SearchOutlined className="search-icon" />
          <input
            type="text"
            placeholder="Search movie here!"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          <button type="submit" className="btn-grad">
            serach
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
