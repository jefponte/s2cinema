import { Box, Container, Grid } from "@material-ui/core";
import ListMovies from "../components/ListMovies";
import React, { useState } from "react";
import Header from "../components/Header";

function Home() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  function handleSearch(search) {
    setQuery(search);
    setPageNumber(1);
  }
  return (
    <>
      <Header onSearch={handleSearch} />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 3,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="xl">
            <Grid container spacing={4}>
              <ListMovies query pageNumber setPageNumber={setPageNumber}/>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default Home;
