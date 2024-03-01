import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";
const MovieList = ({ filtredMovie }) => {
  return (
    <div className="movie-list">
      {filtredMovie.map((movie, index) => {
        return <MovieCard movie={movie} key={index} />;
      })}
    </div>
  );
};
export default MovieList;
