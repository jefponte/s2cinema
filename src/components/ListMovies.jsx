import { useRef, useCallback } from "react";
import useMovieSearch from "../services/useMovieSearch";
import MovieItem from "./MovieItem";

import CardLoading from  "./CardLoading";



export default function ListMovies(props) {
  const { query } = props;
  let { pageNumber, setPageNumber } = props;
  const { movies, hasMore, loading, error } = useMovieSearch(query, pageNumber);
  const observer = useRef();

  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return (
    <>
      {movies.map((movie, index) => {
        if (movies.length === index + 1) {
          return <MovieItem key={movie.id} movie={movie} />;
        } else {
          return <MovieItem movie={movie} key={movie.id} />;
        }
      })}

      <div>{loading && (<CardLoading/>)}</div>
      <div>{error && "Error"}</div>
      <div ref={lastMovieRef}>.</div>
    </>
  );
}
