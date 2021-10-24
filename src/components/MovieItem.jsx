import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

export default function MovieItem(props) {


  return (
      <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
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
            image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`}
            alt="random"
          /> 

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.movie.original_title}
            </Typography>
            <Typography>1975</Typography>
          </CardContent>
        </Card>
      </Grid>
  )
}
