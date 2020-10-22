import React from "react";

const placeholderImgUrl = "https://via.placeholder.com/380x280";

const Card = ({ title, summary, imgUrl = placeholderImgUrl }) => (
  <div class="rounded overflow-hidden shadow-lg mx-8">
    <img class="w-full" src={imgUrl} alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">{summary}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #photography
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #travel
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #winter
      </span>
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
