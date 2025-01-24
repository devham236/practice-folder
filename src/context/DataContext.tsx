import { createContext, useState } from "react";
import {
  DataContextPropsType,
  DataContextType,
  Restaurant,
} from "../types/allTypes";

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider = ({ children }: DataContextPropsType) => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  return (
    <DataContext.Provider value={{ setAllRestaurants, allRestaurants }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
