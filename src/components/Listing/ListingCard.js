import React from "react";

import Truncate from "components/Truncate";

const placeholderImgUrl = "https://via.placeholder.com/380x280";

const ListingCard = ({
  title,
  summary,
  imgUrl = placeholderImgUrl,
  shared_house,
  shared_room,
  listing_id,
  price,
}) => (
  <div className="w-full md:w-1/3 mb-8">
    <div className="rounded overflow-hidden shadow-lg mx-8">
      <div className="px-6 py-4">
        <div className="relative">
          <span className="absolute tw-price-float rounded-br-sm">
            ${price} / month
          </span>
          <span className="absolute tw-large-number-float float rounded-br-sm">
            {listing_id}
          </span>
          <img className="w-full" src={imgUrl} alt="Sunset in the mountains" />
        </div>
        <div className="font-bold text-lg my-6">{title}</div>

        {/* <p className="text-gray-700 text-xs text-left">{summary}</p> */}
        <Truncate str={summary} charCount={140} />
      </div>
      <div className="px-6 pt-4 pb-2 bg-gray-100">
        <span className="tw-chip bg-purple-300">#photography</span>
        <span className="tw-chip bg-gray-300">#travel</span>
        <span className="tw-chip bg-blue-300">#winter</span>
        <span className="tw-chip bg-gray-300">
          shared_room = {shared_room.toString()}
        </span>
        <span className="tw-chip bg-gray-300">
          shared_house = {shared_house.toString()}
        </span>
      </div>
    </div>
  </div>
);

// const ListingCard = ({
//   account_id,
//   category_id,
//   id,
//   summary,
//   title,
//   ...props
// }) => {
//   return (
//     <>
//       <Card title={title} summary={summary} {...props} />
//     </>
//   );
// };

export { ListingCard };
