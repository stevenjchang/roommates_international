import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContextProvider } from "context/UserContext";
import { ListingsContextProvider } from "context/ListingsContext";
import { ListingContainer } from "components/Listing/ListingContainer";
import { ListingNew } from "components/Listing/ListingNew";
import { ListingDetail } from "components/Listing/ListingDetail";
import { UserRegister } from "components/User/UserRegister";
import { LoginPage } from "components/Login";
import { Navbar } from "components/Navbar";
import { HeroSection } from "components/HeroSection";

import Auth from "utils/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);
  useEffect(() => {
    Auth.Login().then((res) => {
      if (res.isAuthenticated) {
        setUser(res.user);
      }
      setIsLoading(false);
    });
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <h1>Loading</h1>;
        }
        if (!isLoading && user) {
          return <Component {...props} user={user} client={rest.client} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: `/account/login`,
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

function AppRouter() {
  return (
    <Router>
      <UserContextProvider>
        <ListingsContextProvider>
          <Navbar />
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
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/private" component={ListingNew} />
            <Route path="/">
              <HeroSection />
              <ListingContainer />
            </Route>
          </Switch>
        </ListingsContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export { AppRouter };
