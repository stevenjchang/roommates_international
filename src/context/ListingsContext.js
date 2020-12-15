import React, { createContext, useEffect, useState, useMemo } from "react";

export const ListingsContext = createContext(null);

export const ListingsContextProvider = ({ children }) => {
  const [listings, setListings] = useState(null);
  const listingsProviderValue = useMemo(() => ({ listings, setListings }), [
    listings,
    setListings,
  ]);

  useEffect(() => {
    if (!listings) {
      //fetch listing
      //set listing
    }
    return () => {};
  }, [listings]);

  return (
    <ListingsContext.Provider value={listingsProviderValue}>
      {children}
    </ListingsContext.Provider>
  );
};
