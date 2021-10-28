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
  getMovieCredits,
  getWatchProviders,
  getCredits,
  getImages,
  getVideos
} from "../services/api";
import WatchProviders from "../components/WatchProviders";
import ContainerCredits from "../components/ContainerCredits";
import { BackToTop } from "material-ui-back-to-top";
import MovieSearch from "./MovieSearch";
import ContainerImages from "../components/ContainerImages";

import { useLocation } from "react-router-dom";
import ContainerVideos from "../components/ContainerVideos";
import ContainerMovieCredits from "../components/ContainerMovieCredits";

function CardProviders({ watchProviders }) {
  if (watchProviders === null) {
    return <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Watch Providers
        </Typography>
        NULL
      </CardContent>
    </Card>
  </Grid>;
  }
  if (watchProviders === undefined) {
    return <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Watch Providers
        </Typography>
        Undefined
      </CardContent>
    </Card>
  </Grid>;
  }
  if (Object.keys(watchProviders.results).length === 0) {
    return  <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Watch Providers
        </Typography>
        Empty
      </CardContent>
    </Card>
  </Grid>;
  }
  return (
    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Watch Providers
          </Typography>
          <WatchProviders providers={watchProviders} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function PersonSelected(props) {
  const [search, setSearch] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [watchProviders, setWatchProviders] = useState(null);
  const [credits, setCredits] = useState({});
  const [images, setImages] = useState({});
  const [videos, setVideos] = useState({});

  useEffect(() => {
    setSearch(false);
  }, [location]);

  useEffect(() => {
    setPerson({});
    getPerson(id, setPerson);
    //getMovieCredits(id, setMovies);
    // getWatchProviders(id, setWatchProviders);
    getMovieCredits(id, setCredits);
    // getImages(id, setImages);
    // getVideos(id, setVideos);

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
                      {person.birthday === "" ? "???" : <FormattedDate
                        value={new Date(`${person.birthday}T03:00:00.000Z`)}
                      />}({person.place_of_birth})<br/>
                       {person.deathday === "" || person.deathday === null || person.deathday === undefined ? 
                       "-" : <FormattedDate
                        value={new Date(`${person.deathday}T03:00:00.000Z`)}
                      />}
              
                    </Typography>
                    <Typography variant="body2">{person.biography}</Typography> 
                  </CardContent>
                </Card>
                <br />
              </Grid>
              
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={4}>

                  {/* <CardProviders watchProviders={watchProviders} /> */}
                        
                  {/* <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Multimedia
                        </Typography>
                        <ContainerImages images={images} />
                        <ContainerVideos videos={videos} />
                      </CardContent>
                    </Card>
                  </Grid> */}

                 
                    
                      {Object.keys(credits).length === 0 ? (
                        <>Loading credits</>
                      ) : (
                        <ContainerMovieCredits credits={credits} />
                      )}
                    
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}
