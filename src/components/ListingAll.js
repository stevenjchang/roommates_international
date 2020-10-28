import React from "react";

import { ListingDetail } from "components/ListingDetail";

const filteredListing = (listings, userFilters) => {
  return listings.filter((listing) => {
    let bool = true;
    for (let [key, value] of Object.entries(userFilters)) {
      if (userFilters[key] === null) {
        bool = true;
      } else if (key === "price_max") {
        if (listing.price > value) {
          bool = false;
        }
      } else if (key === "price_min") {
        if (listing.price < value) {
          bool = false;
        }
      } else {
        if (listing[key] === true && userFilters[key] === true) {
          console.log("else ==>");
          console.log("listing ==>", listing);
          console.log("key ==>", key);
          console.log("listing[key] ==>", listing[key]);
          console.log("userFilters[key] ==>", userFilters[key]);
          bool = false;
        }
      }
    }
    return bool;
  });
};

const ListingAll = ({ data, filterSettings }) => {
  const listings = filteredListing(data, filterSettings);
  console.log("listings ==>", listings);
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
