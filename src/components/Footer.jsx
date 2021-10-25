import { Box, Link, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        GetMovieList
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        <FormattedMessage
          id="app.slogan"
          description="Slogan"
          defaultMessage="Share your lists and get lists"
        />
      </Typography>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://getmovielist.com/">
          getmovielist.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Footer;
