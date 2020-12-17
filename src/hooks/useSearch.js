import { useState, useEffect, useContext } from "react";
import { ListingsContext } from "context/ListingsContext";

const cleanCheckboxValue = (val) => {
  return val === true ? true : undefined;
};

export function useSearch() {
  const { pushToHistory, search } = useContext(ListingsContext);
  // const [searchCriteria, setSearchCriteria] = useState({});
  const [inputValue, setInputValue] = useState({
    price_min: undefined,
    price_max: undefined,
    shared_room: undefined,
    shared_house: undefined,
  });

  useEffect(() => {
    if (search) {
      console.log("search ==>", search);
      const test = JSON.parse(
        '{"' +
          decodeURI(search.substring(1))
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      );
      console.log("test ==>", test);
      setInputValue(test);
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
