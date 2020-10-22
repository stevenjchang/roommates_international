import React from "react";

import { ListingDetail } from "components/ListingDetail";

const ListingAll = ({ listings }) => {
  return (
    <>
      listings
      <div className="flex">
        {listings &&
          listings.map((item, idx) => {
            return <ListingDetail key={idx} {...item} />;
          })}
      </div>
    </>
  );
};

export { ListingAll };
