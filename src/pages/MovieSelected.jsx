import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Container,
} from "@material-ui/core";

import { FormattedDate } from "react-intl";
import { useParams } from "react-router";
import { getMovieTMDB, getWatchProviders, getCredits } from "../services/api";
import WatchProviders from "../components/WatchProviders";
import ContainerCredits from "../components/ContainerCredits";
import { BackToTop } from "material-ui-back-to-top";
import MovieSearch from "./MovieSearch";

export default function MovieSelected(props) {
  const [search, setSearch] = useState(false);

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [watchProviders, setWatchProviders] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    getMovieTMDB(id, setMovie);
    getWatchProviders(id, setWatchProviders);
    getCredits(id, setCredits);
  }, [id]);

  let styles = {
    paperContainer: {
      backgroundColor: "#2b2b2b",
    },
  };

  function PageMovie() {
    return (
      <main>
        <BackToTop />

        <Box
          sx={{
            pt: 3,
            pb: 6,
          }}
          style={styles.paperContainer}
        >
          <Container sx={{ py: 8 }} maxWidth={false}>
            <Grid container spacing={4}>
              {Object.keys(movie).length === 0 ? (
                <>Loading</>
              ) : (
                <>
                  <Grid item xl={3} lg={2} md={3} sm={12} xs={12}>
                    <Card>
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="green iguana"
                      />
                    </Card>
                  </Grid>
                  <Grid item xl={9} lg={10} md={9} sm={12} xs={12}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {movie.title} ({movie.original_title})
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                          <FormattedDate
                            value={
                              new Date(`${movie.release_date}T03:00:00.000Z`)
                            }
                          />
                        </Typography>
                        <Typography variant="body2">
                          {movie.overview}
                        </Typography>
                      </CardContent>
                    </Card>
                    <br />

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Grid container spacing={4}>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                          <Card>
                            <CardContent>
                              <Typography variant="h5" component="div">
                                Watch Providers
                              </Typography>
                              {Object.keys(watchProviders).length === 0 ? (
                                <>Loading</>
                              ) : (
                                <WatchProviders providers={watchProviders} />
                              )}
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                          <Card>
                            <CardContent>
                              <Typography variant="h5" component="div">
                                Fotos
                              </Typography>
                              Em breve...
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                          <Card>
                            <CardContent>
                              <Typography variant="h5" component="div">
                                Videos
                              </Typography>
                              Em breve...
                            </CardContent>
                          </Card>
                        </Grid>

                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Grid container spacing={4}>
                            {Object.keys(credits).length === 0 ? (
                              <>Loading credits</>
                            ) : (
                              <ContainerCredits credits={credits} />
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Box>
      </main>
    );
  }
  return (
    <>
      <MovieSearch noSearchJustHeader={true} setSearch={setSearch} /><br/>
      {search ? "TA" : <PageMovie/>}
    </>
  );
  
}
