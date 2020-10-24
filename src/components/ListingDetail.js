import React from "react";

import Truncate from "components/Truncate";

const placeholderImgUrl = "https://via.placeholder.com/380x280";

const Card = ({ title, summary, imgUrl = placeholderImgUrl }) => (
  <div className="w-full md:w-1/3 mb-8">
    <div class="rounded overflow-hidden shadow-lg mx-8">
      <div class="px-6 py-4">
        <img class="w-full" src={imgUrl} alt="Sunset in the mountains" />
        <div class="font-bold text-lg my-6">{title}</div>

        {/* <p class="text-gray-700 text-xs text-left">{summary}</p> */}
        <Truncate str={summary} charCount={140} />
      </div>
      <div class="px-6 pt-4 pb-2 bg-gray-100">
        <span class="tw-chip bg-purple-300">#photography</span>
        <span class="tw-chip bg-gray-300">#travel</span>
        <span class="tw-chip bg-blue-300">#winter</span>
      </div>
    </div>
  </div>
);

const ListingDetail = ({ account_id, category_id, id, summary, title }) => {
  return (
    <>
      <Card title={title} summary={summary} />
    </>
  );
};

export { ListingDetail };
