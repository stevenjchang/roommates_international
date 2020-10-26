import React from "react";

import { useListFilters } from "hooks/useListFilters";

const ListingSearchBar = ({ filterSettings, setFilterSettings }) => {
  const {
    handleSearchTerm,
    price_min,
    price_max,
    shared_room,
    shared_house,
  } = useListFilters();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterSettings({
      price_min,
      price_max,
      shared_room,
      shared_house,
    });
  };
  return (
    <>
      <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Ready to dive in?
            <br />
            <span class="text-indigo-600">Start your free trial today.</span>
            <br />
          </h2>
          <br />

          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-gray-300 border-4 text-sm p-8">
        <form action="" className="" onSubmit={handleSubmit}>
          <input
            name="shared_room"
            type="checkbox"
            checked={shared_room}
            onChange={handleSearchTerm}
            class="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Share a room</label>
          <input
            name="shared_house"
            type="checkbox"
            checked={shared_house}
            onChange={handleSearchTerm}
            class="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Share a house</label>
          <input
            name="price_min"
            type="number"
            checked={price_min}
            onChange={handleSearchTerm}
            class="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Min Price</label>
          <input
            name="price_max"
            type="number"
            checked={price_max}
            onChange={handleSearchTerm}
            class=""
          ></input>
          <label>Max Price</label>
          <input type="submit" className="" />
        </form>
      </div>
    </>
  );
};

export { ListingSearchBar };
