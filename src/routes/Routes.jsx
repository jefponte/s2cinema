import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import MovieSelected from "../pages/MovieSelected";
import PageLogin from "../pages/PageLogin";
import PersonSelected from "../pages/PersonSelected";
import TVSelected from "../pages/TVSelected";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieSelected />
        </Route>
        <Route exact path="/tv">
          <Home type="tv"/>
        </Route>
        <Route path="/tv/:id">
          <TVSelected/>
        </Route>
        <Route path="/person/:id">
          <PersonSelected />
        </Route>
        <Route exact path="/login">
          <PageLogin/>
        </Route>
        <Route>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
