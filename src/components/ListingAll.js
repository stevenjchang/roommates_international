import React from "react";

import { ListingDetail } from "components/ListingDetail";

const ListingAll = ({ listings }) => {
  return (
    <>
      <div className="flex flex-wrap container mx-auto">
        {listings &&
          listings.map((item, idx) => {
            return <ListingDetail key={idx} {...item} />;
          })}
      </div>
    </>
  );
};

export { ListingAll };
