import React from "react";
import HeroImg from "../components/HeroImg";
import BurgerShops from "../components/BurgerShops";
import useDataContext from "../context/useDataContext";

const Compare = () => {
  const { allRestaurants } = useDataContext();
  console.log(allRestaurants);

  return (
    <main className="m-auto w-[900px]">
      <HeroImg />
      <BurgerShops />
    </main>
  );
};

export default Compare;
