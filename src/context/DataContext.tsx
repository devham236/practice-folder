import { createContext, useEffect, useState } from "react";
import {
  DataContextPropsType,
  DataContextType,
  Restaurant,
} from "../types/allTypes";

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider = ({ children }: DataContextPropsType) => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./restaurantData.json");
      const data = await res.json();

      setAllRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ setAllRestaurants, allRestaurants }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
