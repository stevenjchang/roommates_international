import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ListingContainer } from "components/Listing/ListingContainer";
import { ListingNew } from "components/Listing/ListingNew";
import { ListingDetail } from "components/Listing/ListingDetail";
import { UserRegister } from "components/User/UserRegister";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/listing/new">
            <ListingNew />
          </Route>
          <Route path="/listing/:listing_id">
            <ListingDetail />
          </Route>
          <Route path="/register">
            <UserRegister />
          </Route>
          <Route path="/">
            <ListingContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
