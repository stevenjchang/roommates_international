import React, { useState } from "react";

function SearchBar() {
  const [radioInput, setRadioInput] = useState("private");

  return (
    <>
      <div className="flex justify-center">
        <form action="" className="flex justify-center">
          {" "}
          <input
            name="both"
            type="radio"
            className="tw-radio-input"
            value="undefined"
            checked={radioInput === "both"}
          />
          <div className="tw-radio-card" onClick={() => setRadioInput("both")}>
            <p className="">Both</p>
          </div>
          <input
            name="private"
            type="radio"
            className="tw-radio-input"
            value="true"
            checked={radioInput === "private"}
          />
          <div
            className="tw-radio-card"
            onClick={() => setRadioInput("private")}
          >
            <p className="">Private rooms only</p>
          </div>
          <input
            name="shared"
            type="radio"
            className="tw-radio-input"
            value="false"
            checked={radioInput === "shared"}
          />
          <div
            className="tw-radio-card"
            onClick={() => setRadioInput("shared")}
          >
            <p className="">Shared rooms only</p>
          </div>
        </form>
      </div>
    </>
  );
}

export { SearchBar };
