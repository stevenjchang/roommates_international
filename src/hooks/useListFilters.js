import { useState } from "react";

export function useListFilters() {
  const [filters, setFilters] = useState({});
  const { price_min, price_max, shared_room, shared_house } = filters;

  const handleSearchTerm = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { handleSearchTerm, price_min, price_max, shared_room, shared_house };
}
