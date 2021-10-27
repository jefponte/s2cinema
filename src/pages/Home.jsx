import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useCallback, useState } from "react";
import useMovieSearch from "../services/useMovieSearch";
import NavBar from "../components/NavBar";
import MovieItem from "../components/MovieItem";
import { BackToTop } from "material-ui-back-to-top";


export default function Home(props) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { pageMovies, hasMore, loading, error } = useMovieSearch(
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
  function handleSearch(value) {
    setQuery(value);
    setPageNumber(1);
  }
  return (
    <>
      <NavBar onSearch={handleSearch} />
      <main>
        <BackToTop />
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 1,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth={false}>
            <Grid container spacing={4}>
              {pageMovies.map((page, index) => {
                if (pageMovies.length === index + 1) {
                  return (
                    <React.Fragment key={page.page}>
                      {page.results.map((movie, index) => {
                        return <MovieItem key={movie.id} movie={movie} />;
                      })}
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment key={page.page}>
                      {page.results.map((movie, index) => {
                        return <MovieItem key={movie.id} movie={movie} />;
                      })}
                    </React.Fragment>
                  );
                }
              })}
              <div ref={lastPageElementRef}></div>
              <div>{loading && "Loading..."}</div>
              <div>{error && "Error"}</div>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}
