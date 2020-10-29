import React from "react";
// import { useHistory } from "react-router-dom";

// import { useListFilters } from "hooks/useListFilters";

const ListingSearchBar = ({ inputValue, handleInputChange, handleSubmit }) => {
  const { price_min, price_max, shared_room, shared_house } = inputValue;

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Ready to dive in?
            <br />
            <span className="text-indigo-600">
              Start your free trial today.
            </span>
            <br />
          </h2>
          <br />

          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
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
            className="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Share a room</label>
          <input
            name="shared_house"
            type="checkbox"
            checked={shared_house || false}
            onChange={handleInputChange}
            className="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Share a house</label>
          <input
            name="price_min"
            type="number"
            checked={price_min}
            onChange={handleInputChange}
            className="checked:bg-gray-900 checked:border-transparent"
          ></input>
          <label>Min Price</label>
          <input
            name="price_max"
            type="number"
            checked={price_max}
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
