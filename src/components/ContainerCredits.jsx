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

const NamePerson = styled(({ color, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Description({ type, people }) {
  if (type === "crew") {
    return <NamePerson>{people.job}</NamePerson>;
  } else if (type === "cast") {
    return <NamePerson>{people.character}</NamePerson>;
  }
}
function ItemCredits(props) {
  const { people, type } = props;
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
              : `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${people.profile_path}`
          }
          alt="random"
        />
        {/* </Link> */}
        <CardContent>
          <NamePerson sx={{ fontSize: 14 }} gutterBottom>
            {people.name}
          </NamePerson>
          <Description type={type} people={people} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function ContainerCredits(props) {
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
              />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              {credits.cast.map((people, index) => {
                return (
                  <ItemCredits type={"cast"} people={people} key={index} />
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <FormattedMessage
                id={`movieSelect.crew`}
                description={"Crew"}
                defaultMessage={"Crew"}
              />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              {credits.crew.map((people, index) => {
                return (
                  <ItemCredits type={"crew"} people={people} key={index} />
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </React.Fragment>
  );
}
