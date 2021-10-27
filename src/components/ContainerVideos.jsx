import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ContainerVideos(props) {
  const { videos } = props;
  if (Object.keys(videos).length === 0) {
    return <>Loading</>;
  }

  if (videos.results.length === 0) {
    return <>Nenhum Vídeo</>;
  }

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Videos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageList
            sx={{
              height: 480,
              transform: "translateZ(0)",
            }}
            cols={1}
            gap={1}
          >
            {videos.results.map((item, index) => {
              return (
                <ImageListItem key={index}>
                  <iframe
                    height="480"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
