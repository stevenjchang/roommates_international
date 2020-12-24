import React from "react";

function SearchBar() {
  return (
    <>
      <div className="flex justify-center">
        <form action="" className="flex justify-center">
          {" "}
          <input
            type="radio"
            className="tw-radio-input"
            value="undefined"
            checked
          />
          <div className="tw-radio-card ">
            <p className="">Both</p>
          </div>
          <input type="radio" className="tw-radio-input" value="true" />
          <div className="tw-radio-card ">
            <p className="">Private Room only</p>
          </div>
          <input type="radio" className="tw-radio-input" value="false" />
          <div className="tw-radio-card ">
            <p className="">Shared Room only</p>
          </div>
        </form>
      </div>
    </>
  );
}

export { SearchBar };
