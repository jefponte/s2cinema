import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Link,
  ImageList,
  ImageListItem,
  Card,
  CardMedia,
  Grid,
} from "@material-ui/core";

export default function ContainerImages(props) {
  const { images } = props;
  if (Object.keys(images).length === 0) {
    return <>Loading</>;
  }

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fotos</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={4}>
              
          {images.backdrops.map((item, index) => {
            return (
              <Grid  key={index} item xl={4} lg={2} md={2} sm={5} xs={5}>
              <Link
                key={index}
                color="inherit"
                href={`https://image.tmdb.org/t/p/original/${item.file_path}`}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.file_path}`}
                    alt="green iguana"
                  />
                </Card>
              </Link></Grid>
            );
          })}
          {images.posters.map((item, index) => {
            return (
              <Grid  key={index} item xl={4} lg={2} md={2} sm={5} xs={5}>
              <Link
                key={index}
                color="inherit"
                href={`https://image.tmdb.org/t/p/original/${item.file_path}`}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.file_path}`}
                    alt="green iguana"
                  />
                </Card>
              </Link></Grid>
            );
          })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
