import React, { useEffect, useState } from "react";

import { ListingAll } from "components/ListingAll";
import { ListingSearchBar } from "components/ListingSearchBar";
import { serverUrl } from "utils/url";

const ListingContainer = () => {
  const [data, setData] = useState([]);

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
      <ListingSearchBar setData={setData} />
      <ListingAll listings={data} />
    </>
  );
};

export { ListingContainer };
