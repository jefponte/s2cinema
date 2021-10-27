import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import ImageNoPoster from "../assets/images/noImage.png";
import styled from "styled-components";

const NamePerson = styled(({ color, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


function ItemCredits(props) {
  const { people } = props;
  return (
    <Grid item xl={1} lg={2} md={2} sm={6} xs={6}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Link to={`/person/${people.id}`}> */}
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={
              people.profile_path === null
                ? ImageNoPoster
                : `https://image.tmdb.org/t/p/original/${people.profile_path}`
            }
            alt="random"
          />
        {/* </Link> */}
        <CardContent>
          <NamePerson sx={{ fontSize: 14 }} gutterBottom>
            {people.name}
          </NamePerson>
          {/* <Typography>Personagem</Typography> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
export default function ContainerCredits(props) {
  const { credits } = props;

  return (
    <React.Fragment>
      {credits.cast.map((people, index) => {
        return <ItemCredits people={people} key={index} />;
      })}
      {credits.crew.map((people, index) => {
        return <ItemCredits people={people} key={index} />;
      })}
    </React.Fragment>
  );
}
