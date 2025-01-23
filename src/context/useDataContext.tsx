import { useContext } from "react";
import { DataContext } from "./DataContext";

const useDataContext = () => {
  const dataContext = useContext(DataContext);
  return dataContext;
};

export default useDataContext;
