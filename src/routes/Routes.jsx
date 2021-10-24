import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import MovieSelect from "../pages/MovieSelect";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieSelect/>
        </Route>
        <Route path="/person/:id">
          <Home />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
