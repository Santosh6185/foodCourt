import  { useEffect, useState } from "react";

import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(MENU_URL + resId);
    const json = await res.json();

    setData(json?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useRestaurantMenu;
