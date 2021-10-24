import React from "react";
import ImageNoPoster from "../assets/images/noImage.png";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  const data = new Date(props.movie.release_date);
  let imagePath = ImageNoPoster;

  if (props.movie.poster_path !== null) {
    imagePath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`;
  }
  return (
    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
      {console.log()}
      <Link to={`/movie/${props.movie.id}`}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={imagePath}
          alt="random"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.title}
          </Typography>
          <Typography>{data.getFullYear()}</Typography>
        </CardContent>
      </Card></Link>
    </Grid>
  );
}
