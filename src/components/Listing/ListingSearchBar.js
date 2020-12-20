import React from "react";
// import { useHistory } from "react-router-dom";

// import { useListFilters } from "hooks/useListFilters";
import { useSearch } from "hooks/useSearch";

const ListingSearchBar = () => {
  const { inputValue, handleInputChange, handleSubmit } = useSearch();
  const { price_min, price_max, shared_room, shared_house } = inputValue;

  return (
    <>
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
