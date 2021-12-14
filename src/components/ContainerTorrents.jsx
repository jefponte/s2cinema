import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Link,
  Card,
  CardMedia,
  Grid,
} from "@material-ui/core";

export default function ContainerTorrents(props) {
  const { movie } = props;
  if (movie === null) {
    return <>Loading..</>;
  }
  if (Object.keys(movie).length === 0) {
    return <>Loading</>;
  }
  if (movie.torrents === undefined) {
    return <>Loading</>;
  }

  return (
    <>
      {Object.keys(movie.torrents).map((element, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{element}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={4}>

                {Object.keys(movie.torrents[element]).map((element2, index) => {
                  return (
                    <><a href={`https://webtor.io/#/show?magnet=${movie.torrents[element][element2].url}`}>{element2}</a> - <br/><br/><br/></>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
