export type DataContextType = {
  allRestaurants: [];
  setAllRestaurants: React.Dispatch<React.SetStateAction<[]>>;
};

export type DataContextPropsType = {
  children: React.ReactNode;
};
