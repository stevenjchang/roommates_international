import { useState, useEffect, useContext } from "react";

import { ListingsContext } from "context/ListingsContext";
import { queryStringToObject } from "utils/Parse";

const cleanCheckboxValue = (val) => {
  return val === true ? true : undefined;
};

export function useSearch() {
  const { pushToHistory, search } = useContext(ListingsContext);
  const [inputValue, setInputValue] = useState({
    price_min: 0,
    price_max: 0,
    shared_room: undefined,
    shared_house: undefined,
  });

  useEffect(() => {
    if (search) {
      const newSearchCriteria = queryStringToObject(search);
      setInputValue(newSearchCriteria);
    }
  }, [search]);

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
    pushToHistory(inputValue);
  };

  return { inputValue, handleInputChange, handleSubmit };
}
