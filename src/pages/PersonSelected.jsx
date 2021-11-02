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
  getPerson,
  getPersonCredits,
  getPersonImages,
} from "../services/api";

import { BackToTop } from "material-ui-back-to-top";
import MovieSearch from "./MovieSearch";
import ContainerImages from "../components/ContainerImages";

import { useLocation } from "react-router-dom";
import ContainerMovieCredits from "../components/ContainerMovieCredits";

export default function PersonSelected(props) {
  const [search, setSearch] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState({});
  const [tvCredits, setTvCredits] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    setSearch(false);
  }, [location]);

  useEffect(() => {
    setPerson({});
    getPerson(id, setPerson);
    getPersonCredits(id, setCredits);
    getPersonCredits(id, setTvCredits, "tv_credits");
    getPersonImages(id, setImages);
  }, [id, search]);

  let styles = {
    paperContainer: {
      backgroundColor: "#2b2b2b",
    },
  };
  if (person === null || person === undefined) {
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
  if (Object.keys(person).length === 0) {
    return (
      <>
        <MovieSearch
        type="movie"
          noSearchJustHeader={true}
          setSearch={setSearch}
          searching={search}
        />
        Loading...
      </>
    );
  }

  if (search) {
    return (
      <MovieSearch
      
        type="movie"
        noSearchJustHeader={true}
        setSearch={setSearch}
        searching={search}
      />
    );
  }
  return (
    <>
      <MovieSearch
        noSearchJustHeader={true}
        setSearch={setSearch}
        searching={search}
      />

      <main>
        <BackToTop />
        <Box
          sx={{
            pt: 25,
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
                    image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
                    alt="green iguana"
                  />
                </Card>
              </Grid>

              <Grid item xl={11} lg={10} md={10} sm={7} xs={7}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {person.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                      {person.birthday === "" ? (
                        "???"
                      ) : (
                        <FormattedDate
                          value={new Date(`${person.birthday}T03:00:00.000Z`)}
                        />
                      )}
                      ({person.place_of_birth})<br />
                      {person.deathday === "" ||
                      person.deathday === null ||
                      person.deathday === undefined ? (
                        "-"
                      ) : (
                        <FormattedDate
                          value={new Date(`${person.deathday}T03:00:00.000Z`)}
                        />
                      )}
                    </Typography>
                    <Typography variant="body2">{person.biography}</Typography>
                  </CardContent>
                </Card>
                <br />
              </Grid>

              {Object.keys(images).length === 0 ? (
                <></>
              ) : (
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <ContainerImages images={images} />
                </Grid>
              )}

              {Object.keys(credits).length === 0 ? (
                <>Loading credits</>
              ) : (
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Card>
                    <CardContent>
                      Movies
                      <ContainerMovieCredits type="movie" credits={credits} />
                    </CardContent>
                  </Card>
                </Grid>
              )}
              {Object.keys(tvCredits).length === 0 ? (
                <>Loading credits</>
              ) : (
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Card>
                    <CardContent>
                      Tv Shows
                      <ContainerMovieCredits type="tv" credits={tvCredits} />
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}
