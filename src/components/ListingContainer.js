import React, { useEffect, useState } from "react";

import { ListingAll } from "components/ListingAll";
import { ListingSearchBar } from "components/ListingSearchBar";
import { serverUrl } from "utils/url";

const filteredListing = (listings, userFilters) => {
  return listings.filter((listing) => {
    let bool = true;
    for (let [key, value] of Object.entries(userFilters)) {
      if (key === "price_max") {
        if (listing.price > value) {
          bool = false;
        }
      } else if (key === "price_min") {
        if (listing.price < value) {
          bool = false;
        }
      } else {
        if (listing[key] !== userFilters[key]) {
          bool = false;
        }
      }
    }
    return bool;
  });
};

const ListingContainer = () => {
  const [data, setData] = useState([]);
  const [filterSettings, setFilterSettings] = useState({
    // price_min: 1100,
    // price_max: 1600,
    // shared_room: false,
    // shared_house: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = serverUrl("listing/all");
    try {
      const response = await fetch(url);
      const { result } = await response.json();
      setData(result);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <ListingSearchBar
        filterSettings={filterSettings}
        setFilterSettings={setFilterSettings}
      />
      <ListingAll listings={filteredListing(data, filterSettings)} />
    </>
  );
};

export { ListingContainer };
