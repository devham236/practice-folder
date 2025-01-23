import React from "react";
import Shop from "./Shop";

const BurgerShops = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="mt-4 mb-8">Vergleiche deine Burgerläden</p>
      <Shop />
      <button className="w-full text-center bg-red-300 text-white p-3 rounded-lg">
        Weitere laden
      </button>
    </div>
  );
};

export default BurgerShops;
