import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = ({ movieData }) => {
  const { movieId } = useParams();
  var findMovie = movieData.find((movie, index) => movie.id == movieId);

  return (
    <div>
      <h1>{findMovie.title}</h1>
      <img src={findMovie.posterUrl} alt="" />
      <p>{findMovie.description}</p>
      <p>{findMovie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={findMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;
