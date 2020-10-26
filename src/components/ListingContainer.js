import React, { useEffect, useState } from "react";

import { ListingAll } from "components/ListingAll";
import { ListingSearchBar } from "components/ListingSearchBar";
import { useListFilters } from "hooks/useListFilters";

const ListingContainer = () => {
  // const [filterSettings, setFilterSettings] = useState({
  // price_min: 1100,
  // price_max: 1600,
  // shared_room: false,
  // shared_house: true,
  // });

  const {
    handleSearchTerm,
    price_min,
    price_max,
    shared_room,
    shared_house,
    data,
    filters: filterSettings,
    setFilters: setFilterSettings,
  } = useListFilters();

  return (
    <>
      <ListingSearchBar
        filterSettings={filterSettings}
        setFilterSettings={setFilterSettings}
      />
      <ListingAll data={data} filterSettings={filterSettings} />
    </>
  );
};

export { ListingContainer };
