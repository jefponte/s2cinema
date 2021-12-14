import * as React from "react";
import { FormattedMessage } from "react-intl";
import ImageNoPoster from "../assets/images/noImage.png";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {AccordionSummary,  AccordionDetails,Accordion,  Card, CardContent, CardMedia, Grid,Link, Typography  } from "@material-ui/core";

const NamePerson = styled(({ color, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Description({ type, people }) {
  if (type === "crew") {
    return <NamePerson>{people.job}</NamePerson>;
  } else if (type === "cast") {
    return <NamePerson>{people.character}</NamePerson>;
  }
}
function ItemCredits(props) {
  const { movie } = props;
  var data = null;
  data = new Date(movie.release_date);

  
  
  return (
    <Grid item xl={1} lg={2} md={2} sm={6} xs={6}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={
            movie.poster_path === null
              ? ImageNoPoster
              : `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
          }
          alt="random"
        />
        </Link>
        <CardContent>
          <NamePerson sx={{ fontSize: 14 }} gutterBottom>
            {movie.name}
          </NamePerson>
          {movie.title}
          <Typography>{data === "" ? "????" : data.getFullYear()}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function ContainerCollection(props) {
  const { credits, collection } = props;
  return (
    <React.Fragment>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>



            <Grid container spacing={4}>
              {collection.parts.map((movie, index) => {
                return (
                  <ItemCredits type={"crew"} movie={movie} key={index} />
                );
              })}
            </Grid>
         
      </Grid>
    </React.Fragment>
  );
}
