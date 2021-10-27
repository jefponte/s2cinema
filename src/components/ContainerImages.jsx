import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          <ImageList
            sx={{
              height: 500,
              transform: "translateZ(0)",
            }}
            cols={3}
            gap={1}
          >
            {images.backdrops.map((item, index) => {
              return (
                <ImageListItem key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                    alt={index}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
            {images.posters.map((item, index) => {
              return (
                <ImageListItem key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                    alt={index}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </AccordionDetails>
      </Accordion>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Músicas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
