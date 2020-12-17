import React, { createContext, useEffect, useState, useMemo } from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

import { getUrlWithParams, removeNullValues } from "utils/url";
import { queryStringToObject } from "utils/Parse";

export const ListingsContext = createContext(null);

export const ListingsContextProvider = ({ children }) => {
  const [listings, setListings] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const queryParams = new URLSearchParams(search);
        const urlWithParams = getUrlWithParams("listing/all", queryParams);
        const res = await fetch(urlWithParams);
        const { result } = await res.json();
        setListings(result);
      } catch (err) {
        console.log("[Error] in fetchListings ==>", err);
      }
    };
    fetchListings();
  }, [search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);

    console.log("useEffect 2 ==>");

    if (search) {
      const newSearchCriteria = queryStringToObject(search);
      setSearchCriteria(newSearchCriteria);
    }
  }, [search, history]);

  const pushToHistory = (inputValue) => {
    console.log("inputValue ==>", inputValue);
    const queryParams = new URLSearchParams(inputValue);
    history.push({ search: queryParams.toString() });
  };

  const listingsProviderValue = useMemo(
    () => ({
      listings,
      searchCriteria,
      setSearchCriteria,
      pushToHistory,
      search,
    }),
    [listings, searchCriteria, setSearchCriteria, pushToHistory, search]
  );

  return (
    <ListingsContext.Provider value={listingsProviderValue}>
      {children}
    </ListingsContext.Provider>
  );
};
