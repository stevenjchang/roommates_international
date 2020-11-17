import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ListingContainer } from "components/Listing/ListingContainer";
import { ListingNew } from "components/Listing/ListingNew";
import { ListingDetail } from "components/Listing/ListingDetail";
import { UserRegister } from "components/User/UserRegister";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(false);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...props} user={user} client={rest.client} />
        ) : (
          <Redirect
            to={{
              pathname: `/account/login`,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

function AppRouter() {
  return (
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
        <PrivateRoute path="/private" component={ListingNew} />
        <Route path="/">
          <ListingContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export { AppRouter };
