import { useState, useEffect } from "react";

import { serverUrl } from "utils/url";

export function useListFilters() {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    price_min: undefined,
    price_max: undefined,
    shared_room: undefined,
    shared_house: undefined,
  });
  const { price_min, price_max, shared_room, shared_house } = filters;

  useEffect(() => {
    console.log("useEffect ==>");
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = serverUrl("listing/all");
    try {
      const response = await fetch(url);
      const { result } = await response.json();
      setData(result);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleSearchTerm = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFiltersSubmit = (e) => {};

  return {
    handleSearchTerm,
    price_min,
    price_max,
    shared_room,
    shared_house,
    data,
    filters,
    setFilters,
  };
}
