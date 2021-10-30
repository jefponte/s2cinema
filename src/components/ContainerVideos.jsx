import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, ImageList, ImageListItem, AccordionSummary,AccordionDetails,Typography } from "@material-ui/core";

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
              height: 1000,
              transform: "translateZ(0)",
            }}
            cols={3}
            gap={1}
          >
            {videos.results.map((item, index) => {
              return (
                <ImageListItem key={index}>
                  <iframe
                    height="100%"
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
