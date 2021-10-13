import { AppBar, Toolbar, Typography } from "@material-ui/core";


function Header() {
  return (
    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            GetMovieList
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
