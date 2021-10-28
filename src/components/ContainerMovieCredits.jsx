import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import ImageNoPoster from "../assets/images/noImage.png";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";

const NamePerson = styled(({ color, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Description({ type, movie }) {
  if (type === "crew") {
    return <NamePerson>{movie.job}</NamePerson>;
  } else if (type === "cast") {
    return <NamePerson>{movie.character}</NamePerson>;
  }
}

function ItemCredits(props) {
  const { movie, type } = props;
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
              movie.poster_path === null || movie.poster_path === undefined
                ? ImageNoPoster
                : `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            alt="random"
          />
        </Link>
        <CardContent>
          <NamePerson sx={{ fontSize: 14 }} gutterBottom>
            {movie.title}
          </NamePerson>
          <Description type={type} movie={movie} />
        </CardContent>
      </Card>
    </Grid>
  );
}

function ShowAcordionCrew(props){
  const {credits} = props;
  if(credits.crew === null || credits.crew === undefined){
    return (<></>);
  }
  if(credits.crew.length === 0){
    return (<></>);
  }
  
  let jobs = {};
  credits.crew.forEach((movie) => {
    if(jobs[movie.job] === undefined){
      jobs[movie.job] = [];
    }
    jobs[movie.job].push(movie);
  });

  console.log(jobs);
  return (<>
  {Object.keys(jobs).map((element, index) => {
    return (
      <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {element }({jobs[element].length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              {jobs[element].map((movie, index2) => {
                return <ItemCredits type={"crew"} movie={movie} key={index2} />;
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>);
  })}
  </>);


}

export default function ContainerMovieCredits(props) {
  const { credits } = props;
  return (
    <React.Fragment>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <FormattedMessage
                id={`movieSelect.cast`}
                description={"cast"}
                defaultMessage={"Cast"}
              />({credits.cast.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              {credits.cast.map((movie, index) => {
                return <ItemCredits type={"cast"} movie={movie} key={index} />;
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <ShowAcordionCrew credits={credits}/>
        
      </Grid>
    </React.Fragment>
  );
}
