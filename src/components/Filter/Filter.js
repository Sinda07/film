import React, { useState } from "react";
import MovieList from "../MovieList/MovieList";

const Filter = ({ ratingChange, searchInput, movieData }) => {
  var filtredMovie = movieData.filter(
    (movie, index) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );
  return (
    <div>
      <MovieList filtredMovie={filtredMovie} />
    </div>
  );
};
export default Filter;
