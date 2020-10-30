import React from "react";

import { ListingDetail } from "components/Listing/ListingDetail";

const NoListingsAvailable = () => (
  <div className="text-center">
    Sorry, there are no listings with that criteria{" "}
  </div>
);

const ListingAll = ({ listings }) => {
  return (
    <>
      <div className="flex flex-wrap container mx-auto mt-20">
        {listings &&
          listings.map((item, idx) => {
            return <ListingDetail key={idx} {...item} />;
          })}
        {Array.isArray(listings) &&
          listings.length === 0 &&
          NoListingsAvailable()}
      </div>
    </>
  );
};

export { ListingAll };
