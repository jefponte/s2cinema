

import { getMovieTMDB } from "../services/api";
import { Box, Container, Grid } from "@material-ui/core";
import ListMovies from "../components/ListMovies";
import { useHistory, useParams } from "react-router";
import React, { useState,  useEffect } from "react";
import Header from "../components/Header";
import SelectedMovie from "../components/SelectedMovie";

function MovieSelect() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  const [movie, setMovie] = useState({});


  useEffect(() => {
    getMovieTMDB(id, setMovie);
  }, [id, movie]);


  function handleSearch(value) {
    setQuery(value);
    setPageNumber(1);
  }
  return (
    <>
      <Header onSearch={handleSearch}/>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 3,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth={false}>
            <Grid container spacing={4}>
                {query === "" ? <SelectedMovie movie={movie}/> :  <ListMovies query={query} setQuery={setQuery} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}
             
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default MovieSelect;