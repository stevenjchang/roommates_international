import { useState } from "react";

const cleanCheckboxValue = (val) => {
  return val === true ? true : undefined;
};

export function useSearch() {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [inputValue, setInputValue] = useState({
    price_min: undefined,
    price_max: undefined,
    shared_room: undefined,
    shared_house: undefined,
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? cleanCheckboxValue(target.checked)
        : target.value;
    const name = target.name;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCriteria(inputValue);
  };

  return { searchCriteria, inputValue, handleInputChange, handleSubmit };
}
