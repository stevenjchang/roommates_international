import React from "react";
// import { useHistory } from "react-router-dom";

// import { useListFilters } from "hooks/useListFilters";
import { useSearch } from "hooks/useSearch";

const ListingSearchBar = () => {
  const { inputValue, handleInputChange, handleSubmit } = useSearch();
  const { price_min, price_max, shared_room, shared_house } = inputValue;

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between h-half">
          <h2 className="leading-none font-extrabold text-gray-900 text-2xl sm:text-4xl lg:text-5xl capitalize">
            Find roommates! <br />
            Internationally
            <p className="mx-auto max-w-screen-sm leading-tight text-base md:text-xl lg:text-3xl leading-7 text-indigo-600 mt-6">
              Use our custom filters and alerts to simplify your search.
            </p>
            <br />
          </h2>
          <br />

          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/getstarted"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/learnmore"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
            checked={shared_room || false}
            onChange={handleInputChange}
            className="checked:bg-gray-900 checked:border-transparent w-5 h-5"
          ></input>
          <label>Share a room</label>
          <input
            name="shared_house"
            type="checkbox"
            checked={shared_house || false}
            onChange={handleInputChange}
            className="checked:bg-gray-900 checked:border-transparent w-5 h-5"
          ></input>
          <label>Share a house</label>
          <input
            name="price_min"
            type="number"
            value={price_min}
            onChange={handleInputChange}
            className="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Min Price</label>
          <input
            name="price_max"
            type="number"
            value={price_max}
            onChange={handleInputChange}
            className=""
          ></input>
          <label>Max Price</label>
          <input type="submit" className="" />
        </form>
      </div>
    </>
  );
};

export { ListingSearchBar };
