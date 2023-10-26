import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params }) => {
  const movieDetail = Movies.results.find((movie) => movie.id === params.id);
  if (!movieDetail) {
    notFound();
  }
  if (!SearchParamsContext.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
