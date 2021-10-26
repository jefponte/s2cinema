import React, { useState, useRef, useCallback, useEffect } from "react";
import usePageSearch from "../services/usePageSearch";

export default function ListPageMovie(props) {
  const { query } = props;
  const [pageNumber, setPageNumber] = useState(1);
  const [listMovies, setListMovies] = useState([]);
  const { pageMovies, hasMore, loading, error } = usePageSearch(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastPageElementRef = useCallback(
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
    [loading, hasMore]
  );

  

  useEffect(() => {
    let list = [];
    console.log("Executou efeito");
    pageMovies.forEach(function (page, i) {
      page.results.forEach(function (movie) {
        list[movie.id] = movie;
      });
    });
    setListMovies(list);
  }, [pageNumber]);

  return (
    <>
      {listMovies.map((movie, index) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}

      {pageMovies.map((page, index) => {
        if (pageMovies.length === index + 1) {
          return (
            <div ref={lastPageElementRef} key={page.page}>
              <h1>
                {page.page}/{page.total_pages}
              </h1>
              <hr />
              {page.results.map((movie, index) => {
                return <p key={movie.id}>Teste</p>;
              })}
              <hr />
            </div>
          );
        } else {
          return (
            <div key={page.page}>
              <h1>
                {page.page}/{page.total_pages}
              </h1>
              <hr />
              {page.results.map((movie, index) => {
                return <p key={movie.id}>Teste</p>;
              })}
              <hr />
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
