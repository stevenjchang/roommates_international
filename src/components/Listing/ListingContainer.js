import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ListingAll } from "components/Listing/ListingAll";
import { ListingSearchBar } from "components/Listing/ListingSearchBar";
import { getUrlWithParams, removeNullValues } from "utils/url";
import { useSearch } from "hooks/useSearch";

const ListingContainer = () => {
  // const history = useHistory();
  // const [listings, setListings] = useState([]);
  // const {
  //   searchCriteria,
  //   inputValue,
  //   handleInputChange,
  //   handleSubmit,
  // } = useSearch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const urlWithParams = getUrlWithParams("listing/all", searchCriteria);
  //       const res = await fetch(urlWithParams);
  //       const { result } = await res.json();
  //       setListings(result);
  //     } catch (err) {
  //       console.log("err ==>", err);
  //     }
  //   };
  //   const searchParams = new URLSearchParams(removeNullValues(searchCriteria));
  //   history.push({
  //     search: searchParams.toString(),
  //   });
  //   fetchData();
  // }, [searchCriteria, history]);

  return (
    <>
      <ListingSearchBar
      // inputValue={inputValue}
      // handleInputChange={handleInputChange}
      // handleSubmit={handleSubmit}
      />
      <ListingAll
      // listings={listings}
      />
    </>
  );
};

export { ListingContainer };
