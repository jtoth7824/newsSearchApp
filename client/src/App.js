import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchNews from "./pages/SearchNews";
import NoMatch from "./pages/NoMatch";
import SavedNews from "./pages/SavedNews";
import Header from "./components/Header";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchNews />
          </Route>
          <Route exact path="/history">
            <SavedNews />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
