import { useState, useEffect } from "react";

import { getBaseUrl } from "utils/url";

export function useListFilters() {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    price_min: undefined,
    price_max: undefined,
    shared_room: undefined,
    shared_house: undefined,
  });
  const { price_min, price_max, shared_room, shared_house } = filters;

  const fetchData = async (params) => {
    console.log("fetch? ==>");
    const url = baseUrl("listing/all");
    try {
      const response = await fetch(url, params);
      const { result } = await response.json();
      console.log("result ==>", result);
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

  const handleSearchSubmit = (e) => {
    fetchData(filters).then((res) => {
      console.log("res ==>", res);
    });
  };

  return {
    handleSearchTerm,
    handleSearchSubmit,
    price_min,
    price_max,
    shared_room,
    shared_house,
    data,
    filters,
    setFilters,
  };
}
