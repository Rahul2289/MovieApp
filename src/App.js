import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetails/MovieDetail";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbId" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
