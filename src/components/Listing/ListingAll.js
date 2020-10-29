import React from "react";

import { ListingDetail } from "components/Listing/ListingDetail";

const ListingAll = ({ data, filterSettings }) => {
  const listings = data;
  return (
    <>
      <div className="flex flex-wrap container mx-auto mt-20">
        {listings &&
          listings.map((item, idx) => {
            return <ListingDetail key={idx} {...item} />;
          })}
        {Array.isArray(listings) && listings.length === 0 && (
          <div className="text-center">
            Sorry, there are no listings with that criteria{" "}
          </div>
        )}
      </div>
    </>
  );
};

export { ListingAll };
