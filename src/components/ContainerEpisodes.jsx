import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary
} from "@material-ui/core";

export default function ContainerEpisodes(props) {
  const { episodes } = props;
  
  if (Object.keys(episodes).length === 0) {
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
          <Typography>Episodes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {episodes.map((item, index) => {
            return <React.Fragment key={index}>Temporada: {index}<br/>
            
            {item.episodes.map((episode, index2) => {
              return (<React.Fragment key={index2}>{episode.episode_number} - {episode.name}<br/></React.Fragment>);
            })}
            </React.Fragment>;
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
