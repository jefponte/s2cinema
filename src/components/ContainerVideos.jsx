import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  Card,
  Grid,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

export default function ContainerVideos(props) {
  const { videos } = props;
  if (Object.keys(videos).length === 0) {
    return <></>;
  }

  if (videos.results.length === 0) {
    return <></>;
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
          <Grid container spacing={4}>
            {videos.results.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                    <Card>
                      <iframe
                        
                        width="100%"
                        src={`https://www.youtube.com/embed/${item.key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                      <br />
                    </Card>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
