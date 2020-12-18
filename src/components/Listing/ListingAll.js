import React, { useContext } from "react";

import { ListingCard } from "components/Listing/ListingCard";
import { ListingsContext } from "context/ListingsContext";

const NoListingsAvailable = () => (
  <div className="text-center">
    Sorry, there are no listings with that criteria{" "}
  </div>
);

const ListingAll = () => {
  const { listings } = useContext(ListingsContext);
  return (
    <>
      <div className="flex flex-wrap container mx-auto mt-20">
        {listings &&
          listings.map((item, idx) => {
            return <ListingCard key={idx} {...item} />;
          })}
        {Array.isArray(listings) &&
          listings.length === 0 &&
          NoListingsAvailable()}
      </div>
    </>
  );
};

export { ListingAll };
