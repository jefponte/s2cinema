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
import { getMovieTMDB, getWatchProviders } from "../services/api";
import WatchProviders from "../components/WatchProviders";

export default function MovieSelected(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [watchProviders, setWatchProviders] = useState({});

  useEffect(() => {
    getMovieTMDB(id, setMovie);
    getWatchProviders(id, setWatchProviders);
  }, [id]);

  let styles = {
    paperContainer: {
      background: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}") no-repeat bottom center scroll`,
    },
  };

  return (
    <main>
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
                <Grid item xl={3} lg={2} md={3} sm={6} xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid item xl={9} lg={10} md={9} sm={6} xs={6}>
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
                      <Typography variant="body2">{movie.overview}</Typography>
                    </CardContent>
                  </Card><br/>
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
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
