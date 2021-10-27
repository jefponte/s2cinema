import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageNoPoster from "../assets/images/noImage.png";

function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Elenco</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Equipe Técnica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
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
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {people.name}
          </Typography>
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
      {console.log(credits)}
      {credits.cast.map((people, index) => {
        return <ItemCredits people={people} key={index} />;
      })}
      {credits.crew.map((people, index) => {
        return <ItemCredits people={people} key={index} />;
      })}
    </React.Fragment>
  );
}
