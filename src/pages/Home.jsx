import { Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../components/Header";
import ListPageMovie from "../components/ListPageMovie";

function Home() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

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
              <ListPageMovie query={query} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default Home;
