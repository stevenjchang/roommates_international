import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CommentList from "components/Comment/CommentList";
import { getServerUrl } from "utils/url";
import Image from "utils/Image";

const ListingDetail = (props) => {
  const { listing_id } = useParams();
  const [listing, setListing] = useState([]);
  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(getServerUrl(`listing/${listing_id}`));
      const { result } = await res.json();
      setListing(result[0]);
    };
    fetchListing();
  }, [listing_id]);

  const { title, listing_id: listingId, category_id, summary } = listing;
  const imgUrl = Image.getImageUrl(listingId);

  return (
    <>
      <div className="container mx-auto">
        <div className="relative">
          <h1 className="absolute tw-left-large-number-float">{listingId}</h1>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="my-12">{title}</h1>
          <img src={imgUrl} alt="" />
          <h4 className="my-12">{summary}</h4>
        </div>
        <br />
        <hr />
        <div className="my-8">
          comments: <p className="my-8"></p>
          <CommentList listingId={listing_id} />
        </div>
      </div>
    </>
  );
};

export { ListingDetail };
