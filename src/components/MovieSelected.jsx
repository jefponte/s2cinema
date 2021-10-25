import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

export default function MovieSelected(props) {
  const { movie } = props;
  return (
   
      <Grid container spacing={4}>
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
                {movie.original_title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {movie.release_date}
              </Typography>
              <Typography variant="body2">
                {movie.overview}
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

  );
}
