import React, { useEffect, useState } from "react";
import { serverUrl } from "utils/url";

const Listing = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(serverUrl("listing"));
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log("err ==>", err);
    }
  };

  return (
    <>
      listings
      {JSON.stringify(data)}
    </>
  );
};

export { Listing };
