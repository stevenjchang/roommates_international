import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLoggedIn } from "utils/isLoggedIn";

const isLoggedIn = () => {
  return Promise.resolve(true);
};

const PrivateRoute = ({
  component: Component,
  // isAuthenticated,
  // isLoading,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const checkAuth = async () => {
      const isLog = await isLoggedIn();
      console.log("isLog ==>", isLog);
      if (isLog) {
        setIsLoading(false);
        setIsAuthenticated(true);
      } else {
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
    // isLoggedIn()
    //   .then((res) => {
    //     console.log("res ==>");
    //     setIsLoading(false);
    //     setIsAuthenticated(true);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setIsAuthenticated(false);
    //   });
  }, []);

  return (
    <Route>
      {isAuthenticated ? <Component /> : <div>not authentical</div>}
    </Route>
  );

  // return <div>hey</div>;
};

export { PrivateRoute };
