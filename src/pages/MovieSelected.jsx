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
import {
  getMovieTMDB,
  getWatchProviders,
  getCredits,
  getImages,
} from "../services/api";
import WatchProviders from "../components/WatchProviders";
import ContainerCredits from "../components/ContainerCredits";
import { BackToTop } from "material-ui-back-to-top";
import MovieSearch from "./MovieSearch";
import ContainerImages from "../components/ContainerImages";

import { useLocation } from "react-router-dom";

export default function MovieSelected(props) {
  const [search, setSearch] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [watchProviders, setWatchProviders] = useState({});
  const [credits, setCredits] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    setSearch(false);
  }, [location]);

  useEffect(() => {
    setMovie({});
    getMovieTMDB(id, setMovie);
    getWatchProviders(id, setWatchProviders);
    getCredits(id, setCredits);
    getImages(id, setImages);
  }, [id, search]);

  let styles = {
    paperContainer: {
      backgroundColor: "#2b2b2b",
    },
  };
  if (Object.keys(movie).length === 0) {
    return (
      <>
        <MovieSearch
          noSearchJustHeader={true}
          setSearch={setSearch}
          searching={search}
        />
        Loading...
      </>
    );
  }

  return (
    <>
      <MovieSearch
        noSearchJustHeader={true}
        setSearch={setSearch}
        searching={search}
      />
      <br />
      {search ? (
        ""
      ) : (
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
                <Grid item xl={1} lg={2} md={2} sm={5} xs={5}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="green iguana"
                    />
                  </Card>
                </Grid>

                <Grid item xl={11} lg={10} md={10} sm={7} xs={7}>
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
                        <br />
                        {movie.genres.map((genere, index) => {
                          return (
                            <React.Fragment key={index}>
                              {genere.name}/
                            </React.Fragment>
                          );
                        })}
                      </Typography>
                      <Typography variant="body2">{movie.overview}</Typography>
                    </CardContent>
                  </Card>
                  <br />
                </Grid>
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
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                      <Card>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            Multimedia
                          </Typography>
                          <ContainerImages images={images} />
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
            </Container>
          </Box>
        </main>
      )}
    </>
  );
}
