import { useContext } from "react";
import { DataContext } from "./DataContext";

const useDataContext = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return dataContext;
};

export default useDataContext;
