import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { ListingContainer } from "components/ListingContainer";
import { ListingNew } from "components/ListingNew";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/listing/new">
            <ListingNew />
          </Route>
          <Route path="/listing">
            <ListingContainer />
          </Route>

          <Route path="/">home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
